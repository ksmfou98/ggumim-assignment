import React from "react";
import MagnifierItem from "./MagnifierItem";
import { ISubImageListProps } from "./SubImageList";

function MagnifierList({
  productList,
  selectedImageId,
  onSelectImage,
}: ISubImageListProps) {
  return (
    <>
      {productList.map((product) => (
        <MagnifierItem
          key={product.productId}
          product={product}
          isSelected={selectedImageId === product.productId}
          onSelectImage={onSelectImage}
        />
      ))}
    </>
  );
}

export default MagnifierList;
