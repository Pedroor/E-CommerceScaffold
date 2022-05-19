import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

import * as S from "./styles";

const Cart: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <Header title="CARRINHO" />
        <S.Section>Meu Carrinho</S.Section>
      </S.Container>
    </S.SafeContainer>
  );
};

export default Cart;
