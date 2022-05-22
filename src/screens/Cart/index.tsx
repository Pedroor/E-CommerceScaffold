import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import CartFooter from "./components/CartFooter";
import CartList from "./components/CartList";

import * as S from "./styles";

const Cart: React.FC = () => {
  return (
    <S.SafeContainer>
      <S.Container>
        <Header title="CARRINHO" routeName="Home" />
        <S.Section>Meu Carrinho</S.Section>
        <CartList />
        <CartFooter />
        <Button title="FINALIZAR COMPRA" />
      </S.Container>
    </S.SafeContainer>
  );
};

export default Cart;
