import React from "react";
import CategoryList from "./components/CategoryList";
import NewsList from "./components/NewsList";
import CartBag from "../../assets/BAG.png";

import * as S from "./styles";
import ProductList from "./components/ProductList";

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
        <S.SectionContainer>
          <S.Section>Novidades</S.Section>
          <NewsList />
        </S.SectionContainer>
        <S.SectionContainer>
          <S.Section>Listagem</S.Section>
          <ProductList />
        </S.SectionContainer>
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
