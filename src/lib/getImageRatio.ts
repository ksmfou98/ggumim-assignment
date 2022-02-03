import { ImageSizeTypes } from "hooks/useProductImageSize";
import { roundToOne } from "./utils/round";

export const getImageRatio = (
  originalImageSize: ImageSizeTypes,
  adjustedImageSize: ImageSizeTypes
) => {
  const imageWidthRatio = adjustedImageSize.width / originalImageSize.width;
  const imageHeightRatio = adjustedImageSize.height / originalImageSize.height;
  return roundToOne(imageWidthRatio) + roundToOne(imageHeightRatio);
};
