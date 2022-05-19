import React, { useCallback, useState } from "react";
import { useCategoriesList } from "../../../../store/useCategoriesList";

import * as S from "./styles";

interface CategoryCardProps {
  categoryName: string;
  categoryIdentifier: number;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  categoryIdentifier,
}) => {
  const [isActiveCategory, setIsActiveCategory] = useState<boolean>(false);
  const { activeCategoryIdentifier, updateCategoryListIdentifier } =
    useCategoriesList();

  const handleTouchCategory = useCallback(() => {
    setIsActiveCategory(true);
    updateCategoryListIdentifier(categoryIdentifier);
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