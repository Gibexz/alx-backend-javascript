// function that returns the sum of students ids.
export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((accumulator, students) => accumulator + students.id, 0);
}
