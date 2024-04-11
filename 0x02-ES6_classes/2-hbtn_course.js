export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be a array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(nam) {
    if (typeof nam !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nam;
  }

  get length() {
    return this._length;
  }

  set length(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = size;
  }

  get students() {
    return this._students;
  }

  set students(stude) {
    if (!Array.isArray(stude)) {
      throw new TypeError('must be a array');
    }
    this._students = stude;
  }
}
