const CurrencySet = ["USD", "NGN"];
const Big = require("big.js");

class MyBit {
  constructor(price, currency = "USD") {
    if (!price) {
      throw new Error("Amount must be valid");
    }
    if (currency && !CurrencySet.includes(currency.toUpperCase())) {
      throw new Error(`Currency must be one of ${CurrencySet.join(" ")}`);
    }
    this.price = new Big(price);
    this.currency = currency.toUpperCase();
  }

  add(margin) {
    return this.price.times(Big(1).plus(Big(margin).div(100)));
  }

  subtract(margin) {
    return this.price.times(Big(1).minus(Big(margin).div(100)));
  }

  static convertToNaira(price, exchangeRate) {
    return Big(price)
      .times(exchangeRate)
      .toFixed(2)
      .toString()
  }
}

module.exports = MyBit;
