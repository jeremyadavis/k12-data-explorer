export const booleanify = (val: string): boolean | null => {
  if (val !== "N" && val !== "Y") {
    return null;
  }
  return val === "N" ? false : true;
};
