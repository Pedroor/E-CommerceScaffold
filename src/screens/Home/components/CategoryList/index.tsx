import React from "react";
import CategoryCard from "../CategoryCard";

import * as S from "./styles";

interface CategoryListProps {
  categoryList?: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categoryList }) => {
  const renderItem = ({ item }: { item: string }) => {
    return <CategoryCard categoryName={item} categoryIdentifier={item} />;
  };

  return (
    <S.Container>
      <S.CategoryLabel>FILTRAR CATEGORIA</S.CategoryLabel>
      <S.FlatList
        data={categoryList}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default CategoryList;
