const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

let countStudents;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(databaseFile);
    res.type('text').send(studentsData);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

countStudents = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

      const headers = lines.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const students = {};

      let studentsInfo = 'This is the list of our students\n';

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fieldIndex];

        if (field in students) {
          students[field].push(fields[0]); // Assuming first field is 'firstname'
        } else {
          students[field] = [fields[0]];
        }
      });

      studentsInfo += `Number of students: ${lines.length}\n`;

      const allfields = Object.keys(students);

      allfields.forEach((field, index) => {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          studentsInfo += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
          if (index !== allfields.length - 1) {
            studentsInfo += '\n';
          }
        }
      });

      resolve(studentsInfo); // Resolve the promise as the operation is completed
    });
  });
};

app.listen(port);

module.exports = app;
