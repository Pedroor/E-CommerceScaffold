import React, { useCallback } from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ProductProps } from "../../../../@types/interfaces";
import { useProducts } from "../../../../store/useProducts";
import { formatPrice } from "../../../../utils/parsers";
import FloatingButton from "../../../../components/FloatingButton";
import useCart from "../../../../store/useCart";

import * as S from "./styles";

interface CardMediumProps {
  product: ProductProps;
}

const CardMedium: React.FC<CardMediumProps> = ({ product }) => {
  const { addProduct } = useCart();
  const { productsLoading, newsProductsLoading } = useProducts();

  const handleAddProductToCart = useCallback(() => {
    addProduct(product);
  }, [product]);

  if (productsLoading || newsProductsLoading) {
    return (
      <SkeletonPlaceholder maxWidth={180}>
        <SkeletonPlaceholder.Item
          width={160}
          height={140}
          marginRight={12}
          marginTop={24}
        />
      </SkeletonPlaceholder>
    );
  }

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
