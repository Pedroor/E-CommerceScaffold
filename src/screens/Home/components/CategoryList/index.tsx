import React, { useEffect } from "react";
import { useProducts } from "../../../../store/useProducts";
import CategoryCard from "../CategoryCard";

import * as S from "./styles";

const CategoryList: React.FC = () => {
  const { getCategories, categoriesList } = useProducts();

  useEffect(() => {
    async function fetchCategories() {
      await getCategories();
    }
    fetchCategories();
  }, []);

  const renderItem = ({ item }: { item: string }) => {
    return <CategoryCard categoryName={item} categoryIdentifier={item} />;
  };

  return (
    <S.Container>
      <S.CategoryLabel>FILTRAR CATEGORIA</S.CategoryLabel>
      <S.FlatList
        data={categoriesList}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default CategoryList;
