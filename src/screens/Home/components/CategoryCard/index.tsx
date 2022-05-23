import React, { useCallback } from "react";
import { useProducts } from "../../../../store/useProducts";

import * as S from "./styles";

interface CategoryCardProps {
  categoryName: string;
  categoryIdentifier: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  categoryIdentifier,
}) => {
  const {
    updateCategoryListIdentifier,
    activeCategoryIdentifier,
    getProductsByCategory,
    getNewsProductsByCategory,
  } = useProducts();

  const handleTouchCategory = useCallback(() => {
    updateCategoryListIdentifier(categoryIdentifier);
    getProductsByCategory(categoryIdentifier);
    getNewsProductsByCategory(categoryIdentifier);
  }, [activeCategoryIdentifier]);

  return (
    <S.TouchableBox onPress={handleTouchCategory}>
      <S.CategoryContainer
        isActive={categoryIdentifier === activeCategoryIdentifier}
      >
        <S.CategoryName
          isActive={categoryIdentifier === activeCategoryIdentifier}
        >
          {categoryName}
        </S.CategoryName>
      </S.CategoryContainer>
    </S.TouchableBox>
  );
};

export default CategoryCard;
