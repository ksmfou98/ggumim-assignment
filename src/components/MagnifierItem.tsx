import React from "react";
import { TagIcon } from "assets";
import styled from "styled-components";
import { IProductItem } from "types/product";

interface IMagnifierItemProps {
  product: IProductItem;
}

function MagnifierItem({ product }: IMagnifierItemProps) {
  const { pointX, pointY } = product;

  return (
    <Block pointX={pointX} pointY={pointY}>
      <MagnifierIcon src={TagIcon} />
    </Block>
  );
}

const Block = styled.div<{ pointX: number; pointY: number }>`
  position: absolute;
  top: ${(props) => props.pointY}px;
  left: ${(props) => props.pointX}px;
`;

const MagnifierIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export default MagnifierItem;
