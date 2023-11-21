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

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fieldIndex];

        if (field in students) {
          students[field].push(fields[0]); // Assuming first field is 'firstname'
        } else {
          students[field] = [fields[0]];
        }
      });

      console.log(`Number of students: ${lines.length}`);
      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
      }

      resolve(); // Resolve the promise as the operation is completed
    });
  });
}

module.exports = countStudents;
