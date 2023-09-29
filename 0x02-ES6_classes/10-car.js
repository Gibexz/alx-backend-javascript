export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(res) {
    this._brand = res;
  }

  get motor() {
    return this._motor;
  }

  set motor(res) {
    this._motor = res;
  }

  get color() {
    return this._color;
  }

  set color(res) {
    this._color = res;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
