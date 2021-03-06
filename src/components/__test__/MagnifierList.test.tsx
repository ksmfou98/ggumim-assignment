import { render, screen } from "@testing-library/react";
import MagnifierList from "components/MagnifierList";

describe("MagnifierList", () => {
  const initialProps = {
    productList: [
      {
        productId: 219762,
        productName: "애틱 타일 이지케어 발수러그",
        outside: true,
        pointX: 486,
        pointY: 197.667,
        priceOriginal: 76000,
        priceDiscount: 76000,
        discountRate: 0,
        imageUrl:
          "//cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png",
      },
      {
        productId: 83544,
        productName: "플로윙 화이트 원형 테이블",
        outside: false,
        pointX: 319,
        pointY: 170.667,
        priceOriginal: 120000,
        priceDiscount: 74000,
        discountRate: 38,
        imageUrl:
          "//cdn.ggumim.co.kr/cache/furniture/300/20200916133257f6yBWCxVRR.jpg",
      },
      {
        productId: 134225,
        productName: "트리니 벽난로콘솔",
        outside: true,
        pointX: 288,
        pointY: 89.6666,
        priceOriginal: 99000,
        priceDiscount: 99000,
        discountRate: 0,
        imageUrl:
          "//cdn.ggumim.co.kr/cache/furniture/300/202104291640198PeKIa8W06.JPG",
      },
    ],
    selectedImageId: null,
    onSelectImage: () => {},
    adjustedImageSize: {
      width: 800,
      height: 998,
    },
    originalImageSize: {
      width: 1248,
      height: 998,
    },
  };

  test("첫 랜더링 때 tool tip이 안나오는지 테스트", () => {
    render(<MagnifierList {...initialProps} />);

    const toolTipEle = screen.queryAllByRole("img", { name: "tooltip" });
    expect(toolTipEle).toEqual([]);
  });

  test("이미지가 선택되었을 때 tool tip이 하나만 나오는지 테스트", () => {
    const props = {
      ...initialProps,
      selectedImageId: initialProps.productList[0].productId,
    };

    render(<MagnifierList {...props} />);

    const toolTipEle = screen.getAllByRole("img", { name: "tooltip" });
    expect(toolTipEle).toHaveLength(1);
  });
});
