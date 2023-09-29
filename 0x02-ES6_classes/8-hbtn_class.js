export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(res) {
    this._size = res;
  }

  get location() {
    return this._location;
  }

  set location(loc) {
    this._location = loc;
  }

  [Symbol.toPrimitive](nubs) {
    if (nubs === 'number') {
      return this.size;
    }
    if (nubs === 'string') {
      return this.location;
    }
    return this;
  }
}
