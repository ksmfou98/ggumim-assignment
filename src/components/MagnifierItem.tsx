import React from "react";
import styled from "styled-components";
import { ISubImageItem } from "./SubImageItem";
import Tooltip from "./Tooltip";
import { roundToThree } from "lib/utils/round";
import { ImageSizeTypes } from "hooks/useProductImageSize";
import { getMagnifierIcon } from "lib/getMagnifierIcon";

interface MagnifierItemProps extends ISubImageItem {
  adjustedImageSize: ImageSizeTypes;
  positionX: number;
  positionY: number;
}

function MagnifierItem({
  product,
  onSelectImage,
  isSelected,
  adjustedImageSize,
  positionX,
  positionY,
}: MagnifierItemProps) {
  const { productId } = product;
  const { magnifierIcon, magnifierIconAlt } = getMagnifierIcon(isSelected);
  const isRight = adjustedImageSize.width / 2 < positionX;
  const isTop = adjustedImageSize.height / 2 < positionY;

  const onToggleSelect = () => onSelectImage(isSelected ? null : productId);

  return (
    <Block positionY={positionY} positionX={positionX} onClick={onToggleSelect}>
      <MagnifierIcon src={magnifierIcon} alt={magnifierIconAlt} />
      {isSelected && (
        <Tooltip product={product} isRight={isRight} isTop={isTop} />
      )}
    </Block>
  );
}

const Block = styled.div<{ positionY: number; positionX: number }>`
  position: absolute;
  left: ${({ positionX }) => roundToThree(positionX)}px;
  top: ${({ positionY }) => roundToThree(positionY)}px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const MagnifierIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default MagnifierItem;
