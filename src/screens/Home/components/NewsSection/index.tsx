import React from "react";
import { View } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import NewsList from "../NewsList";

import * as S from "./styles";

interface NewsSectionProps {
  newsProducts: ProductProps[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsProducts }) => {
  return (
    <S.SectionContainer>
      <S.Section>Novidades</S.Section>
      <NewsList newsProducts={newsProducts} />
    </S.SectionContainer>
  );
};

export default NewsSection;
