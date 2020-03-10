const CoindeskAPI = require("../src/datasources/coindeskapi");
const mocks = require("./mocks");

describe("BuyCoins API", () => {
  it("should correctly return the resolved computed value", async () => {
    const coindeskAPI = new CoindeskAPI();
    const type = "buy";
    const margin = 0.2;
    const exchangeRate = 365;

    // mock API call
    jest
      .spyOn(coindeskAPI, "get")
      .mockImplementation(() => Promise.resolve(mocks.getNgnMockResponse));

    const actual = await coindeskAPI.getCalculatedPrice(
      type,
      margin,
      exchangeRate
    );
    const expected = { amount: "3041181.48" };

    expect(coindeskAPI.get).toHaveBeenCalled();
    expect(actual).toEqual(expected);
  });
});
