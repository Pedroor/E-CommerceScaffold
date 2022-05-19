import React from "react";
import CardBig from "../CardBig";
import * as S from "./styles";

const mock = [1, 2, 3, 4, 5, 6];

const NewsList: React.FC = () => {
  const renderItem = () => {
    return <CardBig />;
  };

  return (
    <S.Container>
      <S.FlatList
        data={mock}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default NewsList;
