export default function updateStudentGradeByCity(studentArray, city, newGrade) {
  return studentArray
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrade.find(
        (gradeObj) => gradeObj.studentId === student.id,
      );
      const updatedStudent = { ...student };
      updatedStudent.grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return updatedStudent;
    });
}
