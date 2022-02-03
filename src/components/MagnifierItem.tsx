import React from "react";
import { CloseIcon, TagIcon } from "assets";
import styled from "styled-components";
import { ISubImageItem } from "./SubImageItem";
import Tooltip from "./Tooltip";
import { ImageSizeTypes } from "./ProductImageContent";
import { roundToThree } from "lib/utils/roundedToThree";

interface MagnifierItemProps extends ISubImageItem {
  imageSize: ImageSizeTypes;
}

function MagnifierItem({
  product,
  onSelectImage,
  isSelected,
  imageSize,
}: MagnifierItemProps) {
  const { pointX, pointY, productId } = product;
  const magnifierIcon = isSelected ? CloseIcon : TagIcon;
  const magnifierIconAlt = isSelected ? "close" : "tag";
  const positionX = pointY * 1.6 + 11;
  const positionY = pointX * 1.6;
  const isRight = imageSize.width / 2 < positionX;
  const isTop = imageSize.height / 2 < positionY;

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
