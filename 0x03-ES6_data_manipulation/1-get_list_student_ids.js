// fetch students id from array argument
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];

  return arr.map((students) => students.id);
}
