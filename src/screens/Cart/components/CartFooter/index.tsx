import React from "react";
import { View } from "react-native";

import * as S from "./styles";

const CartFooter: React.FC = () => {
  return (
    <S.ValueInformationContainer>
      <S.Title>Total:</S.Title>
      <S.Title>$549.75</S.Title>
    </S.ValueInformationContainer>
  );
};

export default CartFooter;
