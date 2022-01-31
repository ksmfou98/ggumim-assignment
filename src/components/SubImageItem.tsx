import React from "react";
import styled, { css } from "styled-components";
import { IProductItem } from "types/product";
import { SelectedImageIdType } from "./ProductImageContent";

export interface ISubImageItem {
  product: IProductItem;
  isSelected: boolean;
  onSelectImage: (id: SelectedImageIdType) => void;
}

function SubImageItem({ product, isSelected }: ISubImageItem) {
  const { imageUrl } = product;

  return (
    <Container isSelected={isSelected}>
      <ItemImage src={imageUrl} alt="subImage" />
    </Container>
  );
}

const Container = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
      margin: 26px 4px;
      padding: 2px;
      border-radius: 18px;
    `}
`;

const ItemImage = styled.img`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  cursor: pointer;
`;

export default SubImageItem;
