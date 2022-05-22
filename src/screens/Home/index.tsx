import React from "react";
import CategoryList from "./components/CategoryList";

import * as S from "./styles";
import NewsSection from "./components/NewsSection";
import ProductSection from "./components/ProductSection";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <Header />
        <CategoryList />
        <NewsSection />
        <ProductSection />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
