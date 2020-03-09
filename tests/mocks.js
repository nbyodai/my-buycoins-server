const mocks = {
    getNgnMockResponse: JSON.stringify({
      bpi: {
        USD: {
          code: "USD",
          rate: "8,315.3733",
          description: "United States Dollar",
          rate_float: 8315.3733
        },
        NGN: {
          code: "NGN",
          rate: "3,039,268.9533",
          description: "Nigerian Naira",
          rate_float: 3039268.9533
        }
      }
    })
  };

  module.exports = mocks;
