import React from "react";
import NewsList from "../NewsList";

import * as S from "./styles";

const NewsSection: React.FC = () => {
  return (
    <S.SectionContainer>
      <S.Section>Novidades</S.Section>
      <NewsList />
    </S.SectionContainer>
  );
};

export default NewsSection;
