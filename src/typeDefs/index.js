const gql = require('graphql-tag')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
  }

  type Query {
    hello: String
  }

  type Mutation {
    signup(email: String!, password: String!): User!
  }
`

module.exports = typeDefs
