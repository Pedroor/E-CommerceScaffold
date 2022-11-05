import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../../../components/Button";
import useCart from "../../../../store/useCart";
import { useProducts } from "../../../../store/useProducts";
import CardMedium from "../CardMedium";

import * as S from "./styles";

const ProductList: React.FC = () => {
  const { navigate } = useNavigation();
  const { productsList } = useProducts();
  const { cartProducts } = useCart();
  const showCartButton = cartProducts.length !== 0;

  const renderProducts = () => {
    return productsList?.map((item) => (
      <CardMedium product={item} key={item.id} />
    ));
  };

  return (
    <S.Container>
      <S.CardContainer>{renderProducts()}</S.CardContainer>
      {showCartButton ? (
        <Button title="IR PARA O CARRINHO" onPress={() => navigate("Cart")} />
      ) : null}
    </S.Container>
  );
};

export default ProductList;
