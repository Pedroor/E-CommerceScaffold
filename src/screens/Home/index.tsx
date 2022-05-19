import React from "react";
import CategoryList from "./components/CategoryList";
import CartBag from "../../assets/BAG.png";

import * as S from "./styles";

const mockCategoryList = [
  {
    categoryName: "Últimos",
    categoryIdentifier: 1,
  },
  {
    categoryName: "Roupas",
    categoryIdentifier: 2,
  },
  {
    categoryName: "Perfumes",
    categoryIdentifier: 3,
  },
  {
    categoryName: "Games",
    categoryIdentifier: 4,
  },
  {
    categoryName: "Músicas",
    categoryIdentifier: 5,
  },
];

const Home: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <S.RowContainer>
          <S.PageTitle>Produtos</S.PageTitle>
          <S.Bag source={CartBag} />
        </S.RowContainer>
        <CategoryList categoryName="Últimos" categoryList={mockCategoryList} />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
