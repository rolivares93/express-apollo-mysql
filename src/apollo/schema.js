export const schema = `#graphql
  type Query {
    hello: String!
  }
  type Mutation {
    createUser(email: String!): String!
  }
`
