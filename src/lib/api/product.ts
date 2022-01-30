import axios from "axios";
import { IProduct } from "types/product";

export const getProducts = async () => {
  const response = await axios.get<IProduct>(
    `https://cdn.ggumim.co.kr/test/image_product_link.json`
  );
  return response.data;
};
