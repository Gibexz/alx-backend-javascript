export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(user) {
    if (typeof (user) === 'string') {
      this._name = user;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set code(dol) {
    if (typeof (dol) === 'string') {
      this._code = dol;
    } else {
      throw new Error('Code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
