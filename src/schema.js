const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type Query {
    get(id: ID!): String
  }
`
