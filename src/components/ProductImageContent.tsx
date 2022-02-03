import useProductImageSize from "hooks/useProductImageSize";
import React, { useState } from "react";
import styled from "styled-components";
import { IProduct } from "types/product";
import MagnifierList from "./MagnifierList";
import SubImageList from "./SubImageList";

interface IProductImageContentProps {
  products: IProduct;
}

export type SelectedImageIdType = number | null;

function ProductImageContent({ products }: IProductImageContentProps) {
  const { imageUrl, productList } = products;
  const [selectedImageId, setSelectedImageId] =
    useState<SelectedImageIdType>(null);

  const onSelectImage = (id: SelectedImageIdType) => setSelectedImageId(id);

  const { imageRef, adjustedImageSize, originalImageSize, onImageLoad } =
    useProductImageSize();

  return (
    <Container>
      <MainImageBlock>
        <MainImage
          ref={imageRef}
          src={imageUrl}
          alt="mainImage"
          onClick={() => onSelectImage(null)}
          onLoad={onImageLoad}
        />
        <MagnifierList
          productList={productList}
          onSelectImage={onSelectImage}
          selectedImageId={selectedImageId}
          adjustedImageSize={adjustedImageSize}
          originalImageSize={originalImageSize}
        />
      </MainImageBlock>
      <SubImageList
        productList={productList}
        onSelectImage={onSelectImage}
        selectedImageId={selectedImageId}
      />
    </Container>
  );
}

const Container = styled.div``;

const MainImageBlock = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
`;

export default ProductImageContent;
