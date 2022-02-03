export const roundToThree = (num: number) => {
  const temp = num.toString() + "e+3";
  return +(Math.round(+temp) + "e-3");
};
