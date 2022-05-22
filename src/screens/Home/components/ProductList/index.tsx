import React from "react";
import { ListRenderItem } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import { useProducts } from "../../../../store/useProducts";
import CardMedium from "../CardMedium";

import * as S from "./styles";

const ProductList: React.FC = () => {
  const { productsList } = useProducts();
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => {
    return <CardMedium product={item} />;
  };

  return (
    <S.Container>
      <S.List
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ProductList;
