import React from "react";
import MagnifierItem from "./MagnifierItem";
import { ImageSizeTypes } from "./ProductImageContent";
import { ISubImageListProps } from "./SubImageList";

interface IMagnifierListProps extends ISubImageListProps {
  imageSize: ImageSizeTypes;
}

function MagnifierList({
  productList,
  selectedImageId,
  onSelectImage,
  imageSize,
}: IMagnifierListProps) {
  return (
    <>
      {productList.map((product) => (
        <MagnifierItem
          key={product.productId}
          product={product}
          isSelected={selectedImageId === product.productId}
          onSelectImage={onSelectImage}
          imageSize={imageSize}
        />
      ))}
    </>
  );
}

export default MagnifierList;
