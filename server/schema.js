const typeDefs = `#graphql
scalar Upload

type ConversionJob {
  id: ID!
  status: String!
  downloadUrl: String
}

type Query {
  job(id: ID!): ConversionJob
}

type Mutation {
  convertFile(file: Upload!, target: String!): ConversionJob!
}
`;

module.exports = typeDefs;