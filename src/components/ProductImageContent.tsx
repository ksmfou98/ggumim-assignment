import React from "react";
import { IProduct } from "types/product";

interface IProductImageContentProps {
  products: IProduct;
}

// @Note data 정보가 들어오면 재활용 가능하게 구현
function ProductImageContent({ products }: IProductImageContentProps) {
  console.log(products);

  return <div>ProductImageContent</div>;
}

export default ProductImageContent;
