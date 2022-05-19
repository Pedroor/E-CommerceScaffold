import React from "react";
import { View } from "react-native";
import FloatingButton from "../../../../components/FloatingButton";

import * as S from "./styles";

const CardMedium: React.FC = () => {
  return (
    <S.Container>
      <S.CardImage
        source={{
          uri: "https://zeedog.vteximg.com.br/arquivos/mochila-classic-verde-azul-roxo-zeedog-human-main-1.jpg",
        }}
      />
      <S.ButtonContainer>
        <FloatingButton />
      </S.ButtonContainer>
      <S.Label>Roupa Masculina</S.Label>
      <S.Title>Fjallraven - Foldsack</S.Title>

      <S.ProductValue>$109.95</S.ProductValue>
    </S.Container>
  );
};

export default CardMedium;
