module.exports = {
  Query: {
    calculatePrice: async (
      _source,
      { type, margin, exchangeRate },
      { dataSources }
    ) => {
      return dataSources.coindeskAPI.getCalculatedPrice(
        type,
        margin,
        exchangeRate
      );
    }
  }
};
