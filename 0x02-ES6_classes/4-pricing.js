import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(worth) {
    if (typeof (worth) === 'number') {
      this._amount = worth;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  set currency(dol) {
    if (dol instanceof Currency) {
      this._currency = dol;
    } else {
      throw new Error('Currency must be an instance of a function');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    const newAmount = amount * conversionRate;
    return newAmount;
  }
}
