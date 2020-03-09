const CurrencySet = ["USD", "NGN"];

class MyBit {
  constructor(price, currency = "USD") {
    if (!price) {
      throw new Error("Amount must be valid");
    }
    if (currency && !CurrencySet.includes(currency.toUpperCase())) {
      throw new Error(`Currency must be one of ${CurrencySet.join(" ")}`);
    }
    this.price = price;
    this.currency = currency.toUpperCase();
  }

  add(margin) {
    return this.price * (1 + margin / 100);
  }

  subtract(margin) {
    return this.price * (1 - margin / 100);
  }

  static convertToNaira(price, exchangeRate) {
    return price * exchangeRate;
  }
}

module.exports = MyBit;
