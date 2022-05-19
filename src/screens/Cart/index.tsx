import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import CartList from "./components/CartList";

import * as S from "./styles";

const Cart: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <Header title="CARRINHO" routeName="Home" />
        <S.Section>Meu Carrinho</S.Section>
        <CartList />
        <S.ValueInformationContainer>
          <S.Title>Total:</S.Title>
          <S.Title>$549.75</S.Title>
        </S.ValueInformationContainer>
        <Button title="FINALIZAR COMPRA" />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Cart;
