import React from "react";
import { ListRenderItem } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import CardMedium from "../CardMedium";

import * as S from "./styles";

interface ProductSectionProps {
  products?: ProductProps[];
}

const ProductList: React.FC<ProductSectionProps> = ({ products }) => {
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => {
    return <CardMedium product={item} />;
  };

  return (
    <S.Container>
      <S.List
        data={products}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ProductList;
