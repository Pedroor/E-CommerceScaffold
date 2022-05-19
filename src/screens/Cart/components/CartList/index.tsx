import React from "react";
import CartItem from "../CartItem";

import * as S from "./styles";
const mock = [1, 2, 3, 4, 5, 6];
const CartList: React.FC = () => {
  const renderItem = () => {
    return <CartItem />;
  };
  return (
    <S.Container>
      <S.FlatList
        data={mock}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default CartList;
