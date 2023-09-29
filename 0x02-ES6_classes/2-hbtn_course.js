export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(num) {
    if (typeof (num) === 'number') {
      this._length = num;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (Array.isArray(arr)) {
      const checkArray = arr.every((element) => typeof element === 'string');
      if (checkArray) {
        this._students = arr;
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
