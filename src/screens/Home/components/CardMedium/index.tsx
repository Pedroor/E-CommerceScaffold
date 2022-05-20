import React from "react";
import { ProductProps } from "../../../../@types/interfaces";
import FloatingButton from "../../../../components/FloatingButton";
import { formatPrice } from "../../../../utils/parsers";

import * as S from "./styles";

interface CardMediumProps {
  product: ProductProps;
}

const CardMedium: React.FC<CardMediumProps> = ({ product }) => {
  return (
    <S.Container>
      <S.CardImage source={{ uri: product?.image }} />
      <S.ButtonContainer>
        <FloatingButton />
      </S.ButtonContainer>
      <S.Label>{product?.category}</S.Label>
      <S.Title>{product?.title}</S.Title>

      <S.ProductValue>{formatPrice(product?.price)}</S.ProductValue>
    </S.Container>
  );
};

export default CardMedium;
