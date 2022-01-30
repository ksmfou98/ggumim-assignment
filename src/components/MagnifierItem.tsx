import React from "react";
import { CloseIcon, TagIcon } from "assets";
import styled from "styled-components";
import { ISubImageItem } from "./SubImageItem";
import useOutSideClick from "hooks/useOutsideClick";

function MagnifierItem({ product, onSelectImage, isSelected }: ISubImageItem) {
  const { pointX, pointY, productId } = product;
  const { targetEl } = useOutSideClick(isSelected, onSelectImage);

  const onToggleSelect = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onSelectImage(isSelected ? null : productId);
  };

  return (
    <div ref={targetEl}>
      <Block pointX={pointX} pointY={pointY} onClick={onToggleSelect}>
        <MagnifierIcon src={isSelected ? CloseIcon : TagIcon} alt="tag" />
      </Block>
    </div>
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
