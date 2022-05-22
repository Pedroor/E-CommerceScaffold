import { useNavigation } from "@react-navigation/native";
import React from "react";
import CartBag from "../../../../assets//BAG.png";
import useCart from "../../../../store/useCart";

import * as S from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { cartProducts } = useCart();

  const handleNavigateToCart = () => {
    console.log("navigate");
    navigation.navigate("Cart");
  };
  return (
    <S.RowContainer>
      <S.PageTitle>Produtos</S.PageTitle>
      <S.TouchableBox onPress={() => handleNavigateToCart()}>
        <S.IndicationCartAmount>
          <S.TextRed>{cartProducts.length}</S.TextRed>
        </S.IndicationCartAmount>
        <S.Bag source={CartBag} />
      </S.TouchableBox>
    </S.RowContainer>
  );
};

export default Header;
