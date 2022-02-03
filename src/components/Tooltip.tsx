import { ArrowRightIcon, PointIcon } from "assets";
import { comma } from "lib/utils/comma";
import React from "react";
import styled, { css } from "styled-components";
import { IProductItem } from "types/product";

interface ITooltipProps {
  product: IProductItem;
  isRight: boolean;
  isTop: boolean;
}

function Tooltip({ product, isRight, isTop }: ITooltipProps) {
  const { imageUrl, productName, outside, priceDiscount, discountRate } =
    product;

  return (
    <Container isRight={isRight} isTop={isTop}>
      <TooltipImage src={imageUrl} alt="tooltip" />
      <TooltipDescription>
        <FurnitureName>{productName}</FurnitureName>
        <FurniturePrice>
          {outside && <ExpectedPrice>예상가</ExpectedPrice>}
          <PriceDiscount>
            {!outside && (
              <span data-testid="discountRate">{discountRate}%</span>
            )}
            {comma(priceDiscount)}
          </PriceDiscount>
        </FurniturePrice>
      </TooltipDescription>
      <MoveIconBox>
        <MoveIcon src={ArrowRightIcon} alt="이동" />
      </MoveIconBox>
    </Container>
  );
}

const Container = styled.div<{ isRight: boolean; isTop: boolean }>`
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

  ${({ isTop }) =>
    isTop &&
    css`
      top: unset;
      bottom: 52px;
      &::before {
        top: unset;
        bottom: -8px;
        transform: rotate(180deg);
      }
    `}

  ${({ isRight }) =>
    isRight &&
    css`
      left: -160px;
      &::before {
        left: unset;
        right: 34px;
      }
    `}
`;

const TooltipImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const TooltipDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

const FurnitureName = styled.div`
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  line-height: 1.3em;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
`;

const FurniturePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const ExpectedPrice = styled.span`
  color: #898f94;
  font-size: 11px;
  line-height: 1.2em;
  font-weight: bold;
  margin-right: 4px;
`;

const PriceDiscount = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 1.2em;
  font-weight: bold;
  span {
    color: #ff585d;
    margin-right: 4px;
  }
`;

const MoveIconBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const MoveIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default Tooltip;
