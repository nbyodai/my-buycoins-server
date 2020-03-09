module.exports = {
  Query: {
    get: async (_source, { id }, { dataSources }) => {
      return `hello world ${id}`;
    }
  }
};
