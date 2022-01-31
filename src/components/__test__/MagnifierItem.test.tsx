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

  test("선택되지 않았을 때 돋보기 이미지 나오는지 테스트", () => {
    render(<MagnifierItem {...initialProps} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", TagIcon);
    expect(img).toHaveAttribute("alt", "tag");
  });

  test("선택되었을 때는 엑스 이미지 나오는지 테스트", () => {
    render(<MagnifierItem {...initialProps} isSelected={true} />);
    const img = screen.getByRole("img", { name: "close" });
    expect(img).toHaveAttribute("src", CloseIcon);
    expect(img).toHaveAttribute("alt", "close");
  });
});
