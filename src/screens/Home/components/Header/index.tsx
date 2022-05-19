import { useNavigation } from "@react-navigation/native";
import React from "react";
import CartBag from "../../../../assets//BAG.png";

import * as S from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToCart = () => {
    console.log("navigate");
    navigation.navigate("Cart");
  };
  return (
    <S.RowContainer>
      <S.PageTitle>Produtos</S.PageTitle>
      <S.TouchableBox onPress={() => handleNavigateToCart()}>
        <S.Bag source={CartBag} />
      </S.TouchableBox>
    </S.RowContainer>
  );
};

export default Header;
