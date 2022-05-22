import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import useCart from "../../store/useCart";
import CartFooter from "./components/CartFooter";
import CartList from "./components/CartList";
import EmptyCart from "./components/EmptyCart";

import * as S from "./styles";

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  return (
    <S.SafeContainer>
      <S.Container>
        <Header title="CARRINHO" routeName="Home" />
        <S.Section>Meu Carrinho</S.Section>
        {cartProducts.length !== 0 ? (
          <>
            <CartList />
            <CartFooter />
            <Button title="FINALIZAR COMPRA" />
          </>
        ) : (
          <EmptyCart />
        )}
      </S.Container>
    </S.SafeContainer>
  );
};

export default Cart;
