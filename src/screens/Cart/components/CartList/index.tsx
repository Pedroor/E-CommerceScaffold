import React from "react";
import { ListRenderItem } from "react-native";
import { ProductCartProps } from "../../../../@types/interfaces";
import useCart from "../../../../store/useCart";
import CartItem from "../CartItem";

import * as S from "./styles";

const CartList: React.FC = () => {
  const { cartProducts } = useCart();

  const renderItem: ListRenderItem<ProductCartProps> = ({ item }) => {
    return <CartItem product={item} />;
  };
  return (
    <S.Container>
      <S.FlatList
        data={cartProducts}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default CartList;
