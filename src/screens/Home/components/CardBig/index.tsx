import React from "react";
import { View } from "react-native";
import FloatingButton from "../../../../components/FloatingButton";

import * as S from "./styles";

const CardBig: React.FC = () => {
  return (
    <S.Container>
      <S.CardImage
        source={{
          uri: "https://zeedog.vteximg.com.br/arquivos/mochila-classic-verde-azul-roxo-zeedog-human-main-1.jpg",
        }}
      />
      <S.Label>Roupa Masculina</S.Label>
      <S.Title>Fjallraven - Foldsack</S.Title>
      <S.Subtitle>
        Your perfect pack for everyday use and walks in the forest.
      </S.Subtitle>
      <S.ValueContainer>
        <S.ProductValue>$109.95</S.ProductValue>
        <FloatingButton />
      </S.ValueContainer>
    </S.Container>
  );
};

export default CardBig;
