import { render, screen } from "@testing-library/react";
import Tooltip from "components/Tooltip";

describe("Tooltip", () => {
  const initialProps = {
    product: {
      discountRate: 0,
      imageUrl:
        "//cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png",
      outside: true,
      pointX: 486,
      pointY: 197.667,
      priceDiscount: 76000,
      priceOriginal: 76000,
      productId: 219762,
      productName: "애틱 타일 이지케어 발수러그",
    },
    isRight: false,
    isTop: false,
  };

  test("입점되지 않는 가구는 할인율이 없고, 예상가격이 나와 있는지 테스트", () => {
    render(<Tooltip {...initialProps} />);

    const discountRateEle = screen.queryByText(/%/);
    expect(discountRateEle).toBeNull();

    const expectedPriceEle = screen.getByText("예상가");
    expect(expectedPriceEle).toBeInTheDocument();
  });

  test("입점되어 있는 가구는 할인율이 표시되어 있는지 테스트", () => {
    const props = {
      ...initialProps,
      product: {
        ...initialProps.product,
        discountRate: 10,
        outside: false,
      },
    };

    render(<Tooltip {...props} />);

    const discountRateEle = screen.queryByText(/%/);
    expect(discountRateEle).toHaveTextContent(`${props.product.discountRate}%`);
  });
});
