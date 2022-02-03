import { useRef, useState } from "react";

export type ImageSizeTypes = {
  width: number;
  height: number;
};

export default function useProductImageSize() {
  const imageRef = useRef<HTMLImageElement>(null);

  const [originalImageSize, setOriginalImageSize] = useState<ImageSizeTypes>({
    width: 0,
    height: 0,
  });
  const [adjustedImageSize, setAdjustedImageSize] = useState<ImageSizeTypes>({
    width: 0,
    height: 0,
  });

  const onImageLoad = () => {
    setOriginalImageSize({
      width: imageRef.current?.naturalWidth || 0,
      height: imageRef.current?.naturalHeight || 0,
    });
    setAdjustedImageSize({
      width: imageRef.current?.clientWidth || 0,
      height: imageRef.current?.clientHeight || 0,
    });
  };

  return {
    imageRef,
    originalImageSize,
    adjustedImageSize,
    onImageLoad,
  };
}
