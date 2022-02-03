export const roundToOne = (num: number) => {
  const temp = num.toString() + "e+1";
  return +(Math.round(+temp) + "e-1");
};

export const roundToThree = (num: number) => {
  const temp = num.toString() + "e+3";
  return +(Math.round(+temp) + "e-3");
};
