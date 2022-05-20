import React from "react";
import { ProductProps } from "../../../../@types/interfaces";
import { ListRenderItem } from "react-native";
import CardBig from "../CardBig";
import * as S from "./styles";

interface NewsListProps {
  newsProducts: ProductProps[];
}

const NewsList: React.FC<NewsListProps> = ({ newsProducts }) => {
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => {
    return <CardBig product={item} />;
  };

  return (
    <S.Container>
      <S.List
        data={newsProducts}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item?.id}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default NewsList;
