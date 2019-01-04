import { LEA } from "./entity/LEA";
import { Teacher } from "./entity/Teacher";
import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { FindManyOptions } from "typeorm";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  input StringFilterInput {
    # ne: String
    eq: String
    # le: String
    # lt: String
    # ge: String
    # gt: String
    # contains: String
    # notContains: String
    # between: [String]
    # beginsWith: String
  }

  input EntityTeacherFilterInput {
    id: String
    firstName: StringFilterInput
    lastName: StringFilterInput
  }

  type Teacher {
    uuid: String!
    id: String!
    firstName: String!
    lastName: String!
  }

  type District {
    id: String!
    name: String!
    address: String!
    city: String!
    zip: String!
    state: String!
  }

  type Query {
    hello: String
    getTeacher(uuid: ID!): Teacher
    listTeachers(filter: EntityTeacherFilterInput): [Teacher]
    listDistricts: [District]
  }
`;

interface StringFilterInput {
  // ne: string;
  eq: string;
  // le: string;
  // lt: string;
  // ge: string;
  // gt: string;
  // contains: string;
  // notContains: string;
  // between: [string];
  // beginsWith: string;
}

interface EntityTeacherFilterInput {
  [key: string]: StringFilterInput;
  id: StringFilterInput;
  firstName: StringFilterInput;
  lastName: StringFilterInput;
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world and everyone who matters",
    getTeacher: async (_: any, { uuid }: { uuid: string }) => {
      const [teacher] = await Teacher.find({ where: { uuid } });
      // console.log("teacher", teacher);

      return teacher;
    },
    listTeachers: async (
      _: any,
      { filter }: { filter?: EntityTeacherFilterInput },
    ) => {
      // console.log("list teachers", args);

      // { lastName: filter.lastName.eq, firstName: filter.firstName.eq }

      const where: any = {};

      if (filter) {
        Object.keys(filter).forEach((key: string) => {
          const currFilter = filter[key];
          if (currFilter && currFilter.eq) {
            where[key] = currFilter.eq;
          }
        });
      }

      const options: FindManyOptions<Teacher> = {
        where,
      };

      // console.log("where", options);

      const teachers = await Teacher.find(options);
      // console.log("teachers", teachers);

      return teachers;
    },
    listDistricts: async () => {
      // console.log("listDistricts");

      const LeaDistricts = await LEA.find();
      return LeaDistricts.map(lea => ({
        id: lea.leaid,
        name: lea.leaName,
        address: lea.leaAddress,
        city: lea.leaCity,
        zip: lea.leaZip,
        state: lea.leaState,
      }));
    },
  },
};

export const createSchema = () => {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
};
