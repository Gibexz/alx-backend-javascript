export default function createIteratorObject(report) {
  // Define a generator function to iterate through employees
  function* iterateEmployees() {
    const { allEmployees } = report;
    for (const department in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
        const employees = allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  }

  // Create an iterator object
  const iterator = {
    [Symbol.iterator]: iterateEmployees,
  };

  return iterator;
}
