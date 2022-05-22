import React from "react";
import { ProductProps } from "../../../../@types/interfaces";
import ProductList from "../ProductList";

import * as S from "./styles";

const ProductSection: React.FC = () => {
  return (
    <S.SectionContainer>
      <S.Section>Listagem</S.Section>
      <ProductList />
    </S.SectionContainer>
  );
};

export default ProductSection;
