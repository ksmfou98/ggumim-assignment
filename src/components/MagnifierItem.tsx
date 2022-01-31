import React from "react";
import { CloseIcon, TagIcon } from "assets";
import styled from "styled-components";
import { ISubImageItem } from "./SubImageItem";
import Tooltip from "./Tooltip";

function MagnifierItem({ product, onSelectImage, isSelected }: ISubImageItem) {
  const { pointX, pointY, productId } = product;
  const manifierIcon = isSelected ? CloseIcon : TagIcon;

  const onToggleSelect = () => onSelectImage(isSelected ? null : productId);

  return (
    <Block pointX={pointX} pointY={pointY} onClick={onToggleSelect}>
      <MagnifierIcon src={manifierIcon} alt="tag" />
      {isSelected && <Tooltip product={product} />}
    </Block>
  );
}

const Block = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => props.pointY}px;
  left: ${(props) => props.pointX}px;
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
