import React, { useState } from "react";
import styled from "styled-components";
import { IProduct } from "types/product";
import MagnifierList from "./MagnifierList";
import SubImageList from "./SubImageList";

interface IProductImageContentProps {
  products: IProduct;
}

export type SelectedImageIdType = number | null;

// @Note data 정보가 들어오면 재활용 가능하게 구현
// @Note selectedid 를 만들어서 선택된 돋보기 친구를 활성화 시켜줌
function ProductImageContent({ products }: IProductImageContentProps) {
  console.log(products);
  const { imageUrl, productList } = products;
  const [selectedImageId, setSelectedImageId] =
    useState<SelectedImageIdType>(null);

  const onSelectImage = (id: SelectedImageIdType) => setSelectedImageId(id);

  return (
    <Container>
      <MainImageBlock>
        <MainImage
          src={imageUrl}
          alt="mainImage"
          onClick={() => onSelectImage(null)}
        />
        <MagnifierList
          productList={productList}
          onSelectImage={onSelectImage}
          selectedImageId={selectedImageId}
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
  width: 800px;
`;

export default ProductImageContent;
