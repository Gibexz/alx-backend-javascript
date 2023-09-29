export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(intValue) {
    if (typeof (intValue) === 'number') {
      this._sqft = intValue;
    } else {
      throw new Error('Sqft must be an number');
    }
  }
}
