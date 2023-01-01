export const getClassess = (classes) =>
  classes
    .filter((item) => item !== '') // taking non emty entry
    .join(' ') // joining with space
    .trim(); // trimming empty space
