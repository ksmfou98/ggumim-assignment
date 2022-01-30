import React from "react";
import styled from "styled-components";
import { IProductItem } from "types/product";
import { SelectedImageIdType } from "./ProductImageContent";

export interface ISubImageItem {
  product: IProductItem;
  isSelected: boolean;
  onSelectImage: (id: SelectedImageIdType) => void;
}

function SubImageItem({ product }: ISubImageItem) {
  const { imageUrl } = product;

  return (
    <Container>
      <ItemImage src={imageUrl} alt="subImage" />
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
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
