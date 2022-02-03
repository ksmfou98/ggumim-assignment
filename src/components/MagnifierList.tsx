import { ImageSizeTypes } from "hooks/useProductImageSize";
import { roundToOne } from "lib/utils/round";
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
  const imageWidthRatio = adjustedImageSize.width / originalImageSize.width;
  const imageHeightRatio = adjustedImageSize.height / originalImageSize.height;
  const ratioSum = roundToOne(imageWidthRatio) + roundToOne(imageHeightRatio);

  return (
    <>
      {productList.map((product) => (
        <MagnifierItem
          key={product.productId}
          product={product}
          isSelected={selectedImageId === product.productId}
          onSelectImage={onSelectImage}
          positionX={product.pointY * ratioSum + 11}
          positionY={product.pointX * ratioSum}
          adjustedImageSize={adjustedImageSize}
        />
      ))}
    </>
  );
}

export default MagnifierList;
