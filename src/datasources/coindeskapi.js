const { RESTDataSource } = require("apollo-datasource-rest");
const MyBit = require("../model");

class CoindeskAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coindesk.com/v1/bpi/currentprice/";
  }

  async getCalculatedPrice(type, margin, exchangeRate) {
    try {
      const response = await this.get("ngn.json");
      const jsonResponse = JSON.parse(response);

      const currentPrice = jsonResponse.bpi.USD.rate_float;
      const mybit = new MyBit(currentPrice);

      let computedValue;

      if (type === "buy") {
        computedValue = mybit.add(margin);
      }

      if (type === "sell") {
        computedValue = mybit.subtract(margin);
      }

      return {
        amount: MyBit.convertToNaira(computedValue, exchangeRate)
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CoindeskAPI;
