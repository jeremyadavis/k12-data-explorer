import { gql } from "apollo-server-express";

export default gql`
  type Query {
    hello: String!
    leas: [Lea]!
    schools: [School]!
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
    isGreat: Boolean!
    schools: [School]!
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

  type SchoolCharacteristics {
    hasPreschool: Boolean!
    hasKindergarten: Boolean!
    hasGrade1: Boolean!
    hasGrade2: Boolean!
    hasGrade3: Boolean!
    hasGrade4: Boolean!
    hasGrade5: Boolean!
    hasGrade6: Boolean!
    hasGrade7: Boolean!
    hasGrade8: Boolean!
    hasGrade9: Boolean!
    hasGrade10: Boolean!
    hasGrade11: Boolean!
    hasGrade12: Boolean!
    hasUngraded: Boolean!
  }
`;
