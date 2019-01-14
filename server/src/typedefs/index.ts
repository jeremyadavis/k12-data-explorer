import { gql } from "apollo-server-express";

export default gql`
  type Query {
    leas(first: Int, query: String): [Lea]!
    lea(id: ID!): Lea
    schools: [School]!
    school(id: ID!): School
  }

  interface Node {
    id: ID!
  }

  type Lea implements Node {
    id: ID!
    state: String!
    name: String!
    address: String!
    city: String!
    zip: Int!
    totalEnrollment: Int!
    isGreat: Boolean!
    schools(first: Int, after: String): SchoolConnection!
  }

  type School implements Node {
    id: ID!
    leaId: String!
    schId: String!
    name: String!
    latitude: Float
    longitude: Float
    isJJFacility: Boolean!
    lea: Lea!
    characteristics: SchoolCharacteristics!
  }

  type SchoolConnection {
    totalSchools: Int!
    edges: [SchoolEdge!]!
    pageInfo: PageInfo
  }

  type SchoolEdge {
    cursor: String!
    node: School!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type SchoolCharacteristics {
    hasPreschool: Boolean
    hasKindergarten: Boolean
    hasGrade1: Boolean
    hasGrade2: Boolean
    hasGrade3: Boolean
    hasGrade4: Boolean
    hasGrade5: Boolean
    hasGrade6: Boolean
    hasGrade7: Boolean
    hasGrade8: Boolean
    hasGrade9: Boolean
    hasGrade10: Boolean
    hasGrade11: Boolean
    hasGrade12: Boolean
    hasUngraded: Boolean
  }
`;
