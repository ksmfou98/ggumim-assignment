import { ImageSizeTypes } from "hooks/useProductImageSize";
import { getImageRatio } from "lib/getImageRatio";
import React from "react";
import MagnifierItem from "./MagnifierItem";
import { ISubImageListProps } from "./SubImageList";

interface IMagnifierListProps extends ISubImageListProps {
  adjustedImageSize: ImageSizeTypes;
  originalImageSize: ImageSizeTypes;
}

function MagnifierList({
  productList,
  selectedImageId,
  onSelectImage,
  adjustedImageSize,
  originalImageSize,
}: IMagnifierListProps) {
  const imageRatio = getImageRatio(originalImageSize, adjustedImageSize);

  return (
    <>
      {productList.map((product) => (
        <MagnifierItem
          key={product.productId}
          product={product}
          isSelected={selectedImageId === product.productId}
          onSelectImage={onSelectImage}
          positionX={product.pointY * imageRatio + 11}
          positionY={product.pointX * imageRatio}
          adjustedImageSize={adjustedImageSize}
        />
      ))}
    </>
  );
}

export default MagnifierList;
