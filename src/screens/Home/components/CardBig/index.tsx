import React from "react";
import { View } from "react-native";

import * as S from "./styles";

const CardBig: React.FC = () => {
  return (
    <S.Container>
      <S.Label>Roupa Masculina</S.Label>
      <S.Title>Fjallraven - Foldsack</S.Title>
      <S.Subtitle>
        Your perfect pack for everyday use and walks in the forest.
      </S.Subtitle>
    </S.Container>
  );
};

export default CardBig;
