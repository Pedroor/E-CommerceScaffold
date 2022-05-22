import React from "react";
import { ProductCartProps } from "../../../../@types/interfaces";
import { formatPrice } from "../../../../utils/parsers";
import DualButton from "../DualButton";

import * as S from "./styles";

interface CartItemProps {
  product: ProductCartProps;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductImage
          source={{
            uri: product.image,
          }}
        />
        <S.ProductInformation>
          <S.Title>{product.title.substring(0, 20)}</S.Title>
          <S.Price>
            {product.amount}x {formatPrice(product.price.toString())}
          </S.Price>
        </S.ProductInformation>
        <DualButton product={product} />
      </S.ProductContainer>
    </S.Container>
  );
};

export default CartItem;
