const { gql } = require("apollo-server-cloudflare");

module.exports = gql`
  type Response {
    amount: Float
  }

  enum Topic {
    buy
    sell
  }

  type Query {
    calculatePrice(type: Topic!, margin: Float!, exchangeRate: Float!): Response
  }
`;
