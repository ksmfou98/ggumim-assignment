import React from "react";
import { IProductItem } from "types/product";
import MagnifierItem from "./MagnifierItem";

interface IMagnifierListProps {
  productList: IProductItem[];
}

function MagnifierList({ productList }: IMagnifierListProps) {
  return (
    <>
      {productList.map((product) => (
        <MagnifierItem key={product.productId} product={product} />
      ))}
    </>
  );
}

export default MagnifierList;
