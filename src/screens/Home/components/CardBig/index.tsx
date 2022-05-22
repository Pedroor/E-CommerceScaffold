import React, { useCallback } from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ProductProps } from "../../../../@types/interfaces";
import FloatingButton from "../../../../components/FloatingButton";
import useCart from "../../../../store/useCart";
import { useProducts } from "../../../../store/useProducts";
import { formatPrice } from "../../../../utils/parsers";

import * as S from "./styles";

interface CardBigProps {
  product: ProductProps;
}

const CardBig: React.FC<CardBigProps> = ({ product }) => {
  const { addProduct } = useCart();
  const { newsProductsLoading, productsLoading } = useProducts();

  const handleAddProductToCart = useCallback(() => {
    addProduct(product);
  }, [product]);

  if (newsProductsLoading || productsLoading) {
    return (
      <SkeletonPlaceholder maxWidth={180}>
        <SkeletonPlaceholder.Item width={180} height={180} marginLeft={12} />
      </SkeletonPlaceholder>
    );
  }

  return (
    <S.Container>
      <S.CardImage
        source={{
          uri: product?.image,
        }}
      />
      <S.Label>{product?.category}</S.Label>
      <S.Title>{product?.title}</S.Title>
      <S.Subtitle>{`${
        product?.description.length >= 100
          ? product?.description.substring(0, 100)
          : product?.description
      }...`}</S.Subtitle>
      <S.ValueContainer>
        <S.ProductValue>{formatPrice(product?.price)}</S.ProductValue>
        <FloatingButton onPress={handleAddProductToCart} />
      </S.ValueContainer>
    </S.Container>
  );
};

export default CardBig;
