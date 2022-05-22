import React from "react";
import useCart from "../../../../store/useCart";
import { formatPrice } from "../../../../utils/parsers";

import * as S from "./styles";

const CartFooter: React.FC = () => {
  const { cartProducts } = useCart();

  const total = cartProducts.reduce((sumTotal, product) => {
    sumTotal += product.totalAmount;
    return sumTotal;
  }, 0);

  return (
    <S.ValueInformationContainer>
      <S.Title>Total:</S.Title>
      <S.Title>{formatPrice(total.toString())}</S.Title>
    </S.ValueInformationContainer>
  );
};

export default CartFooter;
