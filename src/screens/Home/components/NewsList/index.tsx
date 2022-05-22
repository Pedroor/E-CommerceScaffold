import React, { useEffect } from "react";
import { ProductProps } from "../../../../@types/interfaces";
import { ListRenderItem } from "react-native";
import CardBig from "../CardBig";
import * as S from "./styles";
import { useProducts } from "../../../../store/useProducts";

const NewsList: React.FC = () => {
  const { newsProductsList } = useProducts();

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => {
    return <CardBig product={item} />;
  };

  return (
    <S.Container>
      <S.List
        data={newsProductsList}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item?.id}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default NewsList;
