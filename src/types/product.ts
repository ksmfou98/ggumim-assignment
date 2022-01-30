export interface IProductItem {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

export interface IProduct {
  id: number;
  imageUrl: string;
  productList: IProductItem[];
}
