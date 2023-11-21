const http = require('http');
const fs = require('fs');

function countStudents(path) {
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
}

const port = 1245;
const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    countStudents(databaseFile)
      .then((studentsData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(studentsData);
        res.end();
      })
      .catch(() => {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Internal Server Error');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port);

module.exports = app;
