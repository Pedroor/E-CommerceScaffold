import React, { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList";

import * as S from "./styles";
import NewsSection from "./components/NewsSection";
import ProductSection from "./components/ProductSection";
import Header from "./components/Header";
import ModalizeButton from "./components/ModalizeButton";
import { ProductProps } from "../../@types/interfaces";
import { getAllProducts } from "../../services/products";
import { getAllCategories } from "../../services/categories";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [newsProducts, setNewsProducts] = useState<ProductProps[]>();
  const [products, setProducts] = useState<ProductProps[]>();
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsResponse = await getAllProducts();
        setProducts(productsResponse);
        setNewsProducts(productsResponse.slice(0, 5));
      } catch (error) {
        throw error;
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesResponse = await getAllCategories();
        setCategories(categoriesResponse);
      } catch (error) {
        throw error;
      }
    }
    fetchCategories();
  }, []);

  return (
    <S.SafeContainer>
      <S.Container>
        <Header />
        <CategoryList categoryList={categories} />
        <NewsSection newsProducts={newsProducts} />
        <ProductSection products={products} />
        <ModalizeButton />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Home;
