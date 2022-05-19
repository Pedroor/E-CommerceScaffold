import React from "react";
import CardMedium from "../CardMedium";

import * as S from "./styles";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ProductList: React.FC = () => {
  const renderItem = () => {
    return <CardMedium />;
  };

  return (
    <S.Container>
      <S.FlatList
        data={mock}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ProductList;
