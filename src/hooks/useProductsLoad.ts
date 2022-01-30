import { getProducts } from "lib/api/product";
import { useEffect, useState } from "react";
import { IProduct } from "types/product";

export default function useProductsLoad() {
  const [products, setProducts] = useState<IProduct>({
    id: 0,
    imageUrl: "",
    productList: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return {
    products,
    isLoading,
    isError,
  };
}
