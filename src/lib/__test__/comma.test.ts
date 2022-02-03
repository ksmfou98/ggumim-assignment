import { comma } from "lib/utils/comma";

describe("comma", () => {
  test("정수 9자리 입력 콤마 테스트", () => {
    expect(comma(123456789)).toBe("123,456,789");
  });

  test("정수 7자리 입력 콤마 테스트", () => {
    expect(comma(1234567)).toBe("1,234,567");
  });

  test("정수 6자리 입력 콤마 테스트", () => {
    expect(comma(123456)).toBe("123,456");
  });

  test("소수 입력 콤마 테스트", () => {
    expect(comma(1234.12)).toBe("1,234.12");
  });
});
