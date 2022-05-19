import React from "react";
import CategoryList from "./components/CategoryList";
import CartBag from "../../assets/BAG.png";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <S.RowContainer>
          <S.PageTitle>Produtos</S.PageTitle>
          <S.Bag source={CartBag} />
        </S.RowContainer>
        <CategoryList categoryName="Últimos" />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
