import { render, screen } from "@testing-library/react";
import SubImageItem from "components/SubImageItem";

describe("SubImageItem", () => {
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
    isSelected: false,
    onSelectImage: () => {},
  };

  test("할인율이 없을 경우 DiscountBadge가 없는지 테스트", () => {
    render(<SubImageItem {...initialProps} />);

    const discountBadgeEle = screen.queryByTestId("discountBadge");
    expect(discountBadgeEle).toBeNull();
  });

  test("할인율이 있을 경우 DiscountBadge가 있는지 테스트", () => {
    render(
      <SubImageItem
        {...initialProps}
        product={{ ...initialProps.product, discountRate: 10, outside: false }}
      />
    );

    const discountBadgeEle = screen.queryByTestId("discountBadge");
    expect(discountBadgeEle).toBeInTheDocument();
  });
});
