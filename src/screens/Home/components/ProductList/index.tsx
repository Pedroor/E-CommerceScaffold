import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ListRenderItem } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import Button from "../../../../components/Button";
import useCart from "../../../../store/useCart";
import { useProducts } from "../../../../store/useProducts";
import CardMedium from "../CardMedium";

import * as S from "./styles";

const ProductList: React.FC = () => {
  const { navigate } = useNavigation();
  const { productsList } = useProducts();
  const { cartProducts } = useCart();
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => {
    return <CardMedium product={item} />;
  };

  return (
    <S.Container>
      <S.List
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          if (cartProducts.length !== 0) {
            return (
              <Button
                title="IR PARA O CARRINHO"
                onPress={() => navigate("Cart")}
              />
            );
          } else {
            return <></>;
          }
        }}
      />
    </S.Container>
  );
};

export default ProductList;
