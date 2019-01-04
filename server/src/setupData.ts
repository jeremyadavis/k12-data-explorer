import { Teacher } from "./entity/Teacher";

export const setupData = async () => {
  await Teacher.clear();

  const teacher = new Teacher();

  teacher.firstName = "Thomas";
  teacher.lastName = "Bainbridge";
  teacher.id = "E12091230841";

  await teacher.save();

  const teacher2 = new Teacher();
  teacher2.firstName = "Penny";
  teacher2.lastName = "Bainbridge";
  teacher2.id = "E1200234234";

  await teacher2.save();

  const teacher3 = new Teacher();
  teacher3.firstName = "Ronald";
  teacher3.lastName = "Finson";
  teacher3.id = "E009023803";

  await teacher3.save();
};
