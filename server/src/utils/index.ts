export const booleanify = (val: String): Boolean => {
  if (val !== "N" && val !== "Y") {
    throw new Error("booleanify only recognized values of N or Y");
  }
  return val === "N" ? false : true;
};
