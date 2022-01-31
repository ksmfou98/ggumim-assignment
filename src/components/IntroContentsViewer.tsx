import React from "react";
import useProductsLoad from "hooks/useProductsLoad";
import ProductImageContent from "./ProductImageContent";

function IntroContentsViewer() {
  const { products, isError, isLoading } = useProductsLoad();

  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>데이터 요청에 실패했습니다 다시 시도해주세요.</div>;

  return (
    <>
      <ProductImageContent products={products} />
    </>
  );
}

export default IntroContentsViewer;
