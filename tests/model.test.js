const MyBit = require("../src/model");

describe("Model tests", () => {
  it("should fail if initialized with no price", () => {
    expect(() => {
      new MyBit();
    }).toThrow();
  });

  it("should fail if initialized with wrong currency", () => {
    expect(() => {
      new MyBit(100, "cos");
    }).toThrow();
  });

  it("should be initialized correctly with just price, default USD currency", () => {
    const mybit = new MyBit(100);
    expect(mybit.price).toEqual(100);
    expect(mybit.currency).toEqual("USD");
  });

  it("should be initialized correctly with just price, and NGN", () => {
    const mybit = new MyBit(100, "ngn");
    expect(mybit.currency).toEqual("NGN");
  });
  it("should be subtract for sell", () => {
    const currentPrice = 100;
    const margin = 0.2;
    const mybit = new MyBit(currentPrice);

    expect(mybit.subtract(margin)).toEqual(100 * (1 - margin / 100));
  });

  it("should be add for buy", () => {
    const currentPrice = 100;
    const margin = 0.2;
    const mybit = new MyBit(currentPrice);

    expect(mybit.add(margin)).toEqual(100 * (1 + margin / 100));
  });

  it("should convert amount to naira given exchangeRate", () => {
    const price = 100; // $
    const exchangeRate = 365.0;
    const converted = MyBit.convertToNaira(price, exchangeRate);

    expect(converted).toEqual(price * exchangeRate);
  });
});
