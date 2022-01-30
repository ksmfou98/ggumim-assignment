import React from "react";
import useProductsLoad from "hooks/useProductsLoad";
import ProductImageContent from "./ProductImageContent";

function IntroContentsViewer() {
  const { products } = useProductsLoad();

  return (
    <>
      <ProductImageContent products={products} />
    </>
  );
}

export default IntroContentsViewer;
