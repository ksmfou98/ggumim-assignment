import { BadgeIcon } from "assets";
import palette from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

interface DiscountBadgeProps {
  discountRate: number;
}

function DiscountBadge({ discountRate }: DiscountBadgeProps) {
  return (
    <Container data-testid="discountBadge">
      {discountRate}
      <span>%</span>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(${BadgeIcon});
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: ${palette.white};
  text-align: center;
  padding-left: 1px;
  span {
    font-size: 8px;
  }
`;

export default DiscountBadge;
