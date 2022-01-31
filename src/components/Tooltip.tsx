import { PointIcon } from "assets";
import React from "react";
import styled from "styled-components";
import { IProductItem } from "types/product";
import { ImageSizeTypes } from "./ProductImageContent";

interface ITooltipProps {
  product: IProductItem;
  imageSize: ImageSizeTypes;
}

function Tooltip({ product, imageSize }: ITooltipProps) {
  console.log("imageSize", imageSize);

  const { imageUrl, productName, outside, priceDiscount, pointX, pointY } =
    product;
  return <Container>Tooltip</Container>;
}

const Container = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(${PointIcon});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

export default Tooltip;
