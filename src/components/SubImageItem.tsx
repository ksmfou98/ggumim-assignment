import React from "react";
import styled, { css } from "styled-components";
import { IProductItem } from "types/product";
import DiscountBadge from "./DiscountBadge";
import { SelectedImageIdType } from "./ProductImageContent";

export interface ISubImageItem {
  product: IProductItem;
  isSelected: boolean;
  onSelectImage: (id: SelectedImageIdType) => void;
}

function SubImageItem({ product, isSelected, onSelectImage }: ISubImageItem) {
  const { imageUrl, productId, outside, discountRate } = product;
  const onToggleSelect = () => onSelectImage(isSelected ? null : productId);

  return (
    <Container isSelected={isSelected} onClick={onToggleSelect}>
      <ItemImage imageUrl={imageUrl}>
        {!outside && <DiscountBadge discountRate={discountRate} />}
      </ItemImage>
    </Container>
  );
}

const Container = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  justify-content: center;
  position: relative;
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
      img {
        border: 0.5px solid white;
      }
    `}
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  cursor: pointer;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export default SubImageItem;
