// import { FindManyOptions } from "typeorm";
import { LEA } from "../entity/LEA";
import { SchoolForm1 } from "../entity/SchoolForm1";
import { booleanify } from "../utils";

export default {
  Query: {
    hello: () => "Hello World",
    leas: async () => {
      const leas = await LEA.find({ relations: ["schools"] });

      // console.log("leas", leas);

      return leas;
    },
    schools: async () => {
      const schools = await SchoolForm1.find({
        take: 10,
        relations: ["lea"],
      });

      // console.log("schools", schools);

      return schools;
    },
  },
  Node: {
    __resolveType(obj: any) {
      return obj.__typename;
    },
  },
  Lea: {
    isGreat({ state }: any): Boolean {
      // console.log("state", state);

      return state === "AL";
    },
  },
  School: {
    isJJFacility(parent: SchoolForm1) {
      return booleanify(parent.jj);
    },
    characteristics(parent: SchoolForm1) {
      // console.log("characteristics", parent);

      return parent;
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
};
