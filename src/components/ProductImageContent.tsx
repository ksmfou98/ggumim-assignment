import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IProduct } from "types/product";
import MagnifierList from "./MagnifierList";
import SubImageList from "./SubImageList";

interface IProductImageContentProps {
  products: IProduct;
}

export type SelectedImageIdType = number | null;

export type ImageSizeTypes = {
  width: number;
  height: number;
};

function ProductImageContent({ products }: IProductImageContentProps) {
  console.log(products);
  const imageRef = useRef<HTMLImageElement>(null);
  const { imageUrl, productList } = products;
  const [selectedImageId, setSelectedImageId] =
    useState<SelectedImageIdType>(null);

  const onSelectImage = (id: SelectedImageIdType) => setSelectedImageId(id);

  const imageSize: ImageSizeTypes = {
    width: imageRef.current?.clientWidth || 0,
    height: imageRef.current?.clientHeight || 0,
  };

  return (
    <Container>
      <MainImageBlock>
        <MainImage
          ref={imageRef}
          src={imageUrl}
          alt="mainImage"
          onClick={() => onSelectImage(null)}
        />
        <MagnifierList
          productList={productList}
          onSelectImage={onSelectImage}
          selectedImageId={selectedImageId}
          imageSize={imageSize}
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
