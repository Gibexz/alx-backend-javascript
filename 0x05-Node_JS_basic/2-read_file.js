const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== ''); // removes empty lines

    const headers = lines.shift().split(',');
    const fieldIndex = headers.indexOf('field'); // index of 'field' in the header array extracted for the csv file
    const students = {};

    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[fieldIndex];

      if (field in students) {
        students[field].push(fields[0]);
      } else {
        students[field] = [fields[0]]; // fields[0] is the  firstname position
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
