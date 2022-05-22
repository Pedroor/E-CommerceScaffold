import React, { useCallback } from "react";
import { ProductProps } from "../../../../@types/interfaces";
import FloatingButton from "../../../../components/FloatingButton";
import useCart from "../../../../store/useCart";
import { formatPrice } from "../../../../utils/parsers";

import * as S from "./styles";

interface CardMediumProps {
  product: ProductProps;
}

const CardMedium: React.FC<CardMediumProps> = ({ product }) => {
  const { addProduct } = useCart();

  const handleAddProductToCart = useCallback(() => {
    addProduct(product);
    console.log("OOLA");
  }, [product]);

  return (
    <S.Container>
      <S.CardImage source={{ uri: product?.image }} />
      <S.ButtonContainer>
        <FloatingButton onPress={handleAddProductToCart} />
      </S.ButtonContainer>
      <S.Label>{product?.category}</S.Label>
      <S.Title>{product?.title}</S.Title>

      <S.ProductValue>{formatPrice(product?.price)}</S.ProductValue>
    </S.Container>
  );
};

export default CardMedium;
