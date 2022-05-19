import React from "react";
import CategoryCard from "../CategoryCard";

import * as S from "./styles";

interface CategoryList {
  categoryName: string;
  categoryIdentifier: number;
}
interface CategoryListProps {
  categoryName: string;
  categoryList: CategoryList[];
}

const CategoryList: React.FC<CategoryListProps> = ({
  categoryName,
  categoryList,
}) => {
  const renderItem = ({ item }: { item: CategoryList }) => {
    return (
      <CategoryCard
        categoryName={item.categoryName}
        categoryIdentifier={item.categoryIdentifier}
      />
    );
  };

  return (
    <S.Container>
      <S.CategoryLabel>FILTRAR CATEGORIA</S.CategoryLabel>
      <S.FlatList
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.categoryName}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default CategoryList;
