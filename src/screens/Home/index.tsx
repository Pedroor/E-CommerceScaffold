import React from "react";
import CategoryList from "./components/CategoryList";

import * as S from "./styles";
import NewsSection from "./components/NewsSection";
import ProductSection from "./components/ProductSection";
import Header from "./components/Header";

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
        <Header />
        <CategoryList categoryName="Últimos" categoryList={mockCategoryList} />
        <NewsSection />
        <ProductSection />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
