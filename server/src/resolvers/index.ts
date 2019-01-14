import { LEA } from "../entity/LEA";
import { SchoolForm1 } from "../entity/SchoolForm1";
import { booleanify } from "../utils";
import {
  MoreThan,
  // MoreThanOrEqual,
  LessThan
  // LessThanOrEqual
  // Equal
} from "typeorm";

export default {
  Query: {
    leas: async (
      _: any,
      { first, query }: { after: string; first: number; query: string },
    ) => {
      const where: any = {};

      if (query) {
        const terms = query.split(" ");
        terms.forEach(term => {
          const [name, value] = term.split(":");

          if (value.startsWith("<=")) {
            where[name] = LessThan(Number.parseInt(value.slice(2), 10) + 1);
          } else if (value.startsWith(">=")) {
            where[name] = MoreThan(Number.parseInt(value.slice(2), 10) - 1);
          } else if (value.startsWith("<")) {
            where[name] = LessThan(value.slice(1));
          } else if (value.startsWith(">")) {
            where[name] = MoreThan(value.slice(1));
          } else {
            where[name] = value;
          }
        });
      }

      const leas = await LEA.find({
        take: first,
        where,
      });

      // console.log("leas", leas);

      return leas;
    },
    lea: async (_: any, { id }: { id: string }) => {
      const lea = await LEA.find({
        where: { id },
        relations: ["schools"],
      });

      if (lea.length > 0) {
        return lea[0];
      }

      return null;
    },
    schools: async () => {
      const schools = await SchoolForm1.find({
        take: 10,
        relations: ["lea"],
      });

      // console.log("schools", schools);

      return schools;
    },
    school: async (_: any, { id }: { id: string }) => {
      // console.log("school id", id);
      const school = await SchoolForm1.find({
        where: { id },
      });

      if (school.length > 0) {
        return school[0];
      }

      return null;
    },
  },
  Node: {
    __resolveType(obj: any) {
      return obj.__typename;
    },
  },
  Lea: {
    isGreat: ({ state }: any): boolean => {
      // console.log("state", state);

      return state === "GA";
    },
    schools: async (
      { id }: { id: string },
      { first, after }: { first: number; after: string },
    ) => {
      console.log("lea.schools", id, first, after);

      const where: any = { leaId: id };

      const totalSchools = await SchoolForm1.count({ where });

      if (after) {
        where.id = MoreThan(Buffer.from(after, "base64"));
      }

      const schools = await SchoolForm1.find({
        take: first,
        where,
        order: {
          id: "ASC",
        },
      });

      const edges = schools.map(school => ({
        node: school,
        cursor: Buffer.from(school.id.toString()).toString("base64"),
      }));

      const hasNextPage = async (): Promise<boolean> => {
        if (schools.length < first) {
          return false;
        }

        const one = await SchoolForm1.findOne({
          where: { id: MoreThan(schools[schools.length - 1].id) },
          order: {
            id: "ASC",
          },
        });

        return !!one;
      };

      const hasPreviousPage = async (): Promise<boolean> => {
        if (!after) {
          return false;
        }

        const one = await SchoolForm1.findOne({
          where: {
            id: where.id,
            leaid: id,
          },
        });

        return !!one;
      };

      return {
        totalSchools,
        edges,
        pageInfo: {
          hasNextPage: hasNextPage(),
          hasPreviousPage: hasPreviousPage(),
        },
      };
    },
  },
  School: {
    isJJFacility: (parent: SchoolForm1): boolean | null => {
      return booleanify(parent.jj);
    },
    characteristics: (parent: SchoolForm1): SchoolForm1 => {
      // console.log("characteristics", parent);
      return parent;
    },
    lea: async (parent: SchoolForm1): Promise<LEA> => {
      const lea = await LEA.find({ where: { id: parent.leaId } });
      return lea[0];
    },
  },
  SchoolCharacteristics: {
    hasPreschool(parent: SchoolForm1) {
      return booleanify(parent.gradePs);
    },

    hasKindergarten(parent: SchoolForm1) {
      return booleanify(parent.gradeKg);
    },
    hasGrade1(parent: SchoolForm1) {
      return booleanify(parent.gradeG01);
    },
    hasGrade2(parent: SchoolForm1) {
      return booleanify(parent.gradeG02);
    },
    hasGrade3(parent: SchoolForm1) {
      return booleanify(parent.gradeG03);
    },
    hasGrade4(parent: SchoolForm1) {
      return booleanify(parent.gradeG04);
    },
    hasGrade5(parent: SchoolForm1) {
      return booleanify(parent.gradeG05);
    },
    hasGrade6(parent: SchoolForm1) {
      return booleanify(parent.gradeG06);
    },
    hasGrade7(parent: SchoolForm1) {
      return booleanify(parent.gradeG07);
    },
    hasGrade8(parent: SchoolForm1) {
      return booleanify(parent.gradeG08);
    },
    hasGrade9(parent: SchoolForm1) {
      return booleanify(parent.gradeG09);
    },
    hasGrade10(parent: SchoolForm1) {
      return booleanify(parent.gradeG10);
    },
    hasGrade11(parent: SchoolForm1) {
      return booleanify(parent.gradeG11);
    },
    hasGrade12(parent: SchoolForm1) {
      return booleanify(parent.gradeG12);
    },
    hasUngraded(parent: SchoolForm1) {
      return booleanify(parent.gradeUg);
    },
  },
  // PageInfo: {
  //   hasNextPage: (connection: any) => {
  //     return connection.hasNextPage();
  //   },
  //   hasPreviousPage: (connection: any) => {
  //     return connection.hasPreviousPage();
  //   },
  // },
};
