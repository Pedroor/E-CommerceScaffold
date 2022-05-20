import React from "react";
import { ProductProps } from "../../../../@types/interfaces";
import ProductList from "../ProductList";

import * as S from "./styles";

interface ProductSectionProps {
  products?: ProductProps[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  return (
    <S.SectionContainer>
      <S.Section>Listagem</S.Section>
      <ProductList products={products} />
    </S.SectionContainer>
  );
};

export default ProductSection;
