import { roundToOne, roundToThree } from "lib/utils/round";

describe("round", () => {
  test("소수 첫째 자리로 반내림 되는지 테스트", () => {
    expect(roundToOne(1234.123)).toBe(1234.1);
  });

  test("소수 첫째 자리로 반올림 되는지 테스트", () => {
    expect(roundToOne(1234.567)).toBe(1234.6);
  });

  test("소수 셋째 자리로 반내림 되는지 테스트", () => {
    expect(roundToThree(1234.123434)).toBe(1234.123);
  });

  test("소수 셋째 자리로 반올림 되는지 테스트", () => {
    expect(roundToThree(1234.56789)).toBe(1234.568);
  });
});
