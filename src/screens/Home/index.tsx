import React, { useEffect } from "react";
import CategoryList from "./components/CategoryList";

import * as S from "./styles";
import NewsSection from "./components/NewsSection";
import ProductSection from "./components/ProductSection";
import Header from "./components/Header";
import { useProducts } from "../../store/useProducts";

const Home: React.FC = () => {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

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
