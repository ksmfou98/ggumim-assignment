import { render, screen } from "@testing-library/react";
import { CloseIcon, TagIcon } from "assets";
import MagnifierItem from "components/MagnifierItem";

describe("MagnifierItem", () => {
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
    onSelectImage: () => {},
    isSelected: false,
    imageSize: {
      width: 800,
      height: 998,
    },
  };

  test("가구 정보가 있는 곳에 돋보기 모양 이미지가 나오는지 테스트", () => {
    render(<MagnifierItem {...initialProps} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", TagIcon);
    expect(img).toHaveAttribute("alt", "tag");
  });

  test("돋보기가 클릭되면 상품정보 tool tip이 나오면서 돋보기 모양이 엑스 이미지로 나오는지 테스트", () => {
    render(<MagnifierItem {...initialProps} isSelected={true} />);

    const tooltipImg = screen.getByRole("img", { name: "tooltip" });
    expect(tooltipImg).toHaveAttribute("src", initialProps.product.imageUrl);
    expect(tooltipImg).toHaveAttribute("alt", "tooltip");

    const closeImg = screen.getByRole("img", { name: "close" });
    expect(closeImg).toHaveAttribute("src", CloseIcon);
    expect(closeImg).toHaveAttribute("alt", "close");
  });
});
