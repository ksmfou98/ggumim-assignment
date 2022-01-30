import React from "react";
import styled from "styled-components";
import { IProductItem } from "types/product";
import { SelectedImageIdType } from "./ProductImageContent";
import SubImageItem from "./SubImageItem";

export interface ISubImageListProps {
  productList: IProductItem[];
  onSelectImage: (id: SelectedImageIdType) => void;
  selectedImageId: SelectedImageIdType;
}

function SubImageList({
  productList,
  onSelectImage,
  selectedImageId,
}: ISubImageListProps) {
  return (
    <Container>
      <Block>
        {productList.map((product) => (
          <SubImageItem
            key={product.productId}
            product={product}
            isSelected={selectedImageId === product.productId}
            onSelectImage={onSelectImage}
          />
        ))}
      </Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

export default SubImageList;
