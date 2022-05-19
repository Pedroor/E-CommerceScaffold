import React from "react";

import * as S from "./styles";

interface CategoryListProps {
  categoryName: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ categoryName }) => {
  return (
    <S.Container>
      <S.CategoryLabel>FILTRAR CATEGORIA</S.CategoryLabel>
      <S.CategoryContainer>
        <S.CategoryName isActive={true}>{categoryName}</S.CategoryName>
      </S.CategoryContainer>
    </S.Container>
  );
};

export default CategoryList;
