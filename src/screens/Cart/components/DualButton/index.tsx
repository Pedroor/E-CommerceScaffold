import React, { useCallback } from "react";
import ADD from "../../../../assets/ADD_CART.png";
import REDUCE from "../../../../assets/REDUCE.png";
import LINE from "../../../../assets/Line.png";
import { ProductCartProps } from "../../../../@types/interfaces";
import * as S from "./styles";
import useCart from "../../../../store/useCart";
import { Alert } from "react-native";

interface DualButtonProps {
  product: ProductCartProps;
}

const DualButton: React.FC<DualButtonProps> = ({ product }) => {
  const { addProduct, removeProduct } = useCart();

  const handleAddProductToCart = useCallback(() => {
    addProduct(product);
  }, [product]);

  const handleRemoveProductToCart = useCallback(() => {
    if (product.amount === 1) {
      Alert.alert(
        "Remover Item",
        "Se deseja remover o item do carrinho clique em prosseguir.",

        [
          { text: "Cancelar", onPress: () => {} },
          {
            text: "Prosseguir",
            onPress: () => {
              removeProduct(product);
            },
          },
        ]
      );
    } else {
      removeProduct(product);
    }
  }, [product]);

  return (
    <S.Container>
      <S.TouchableBox onPress={handleRemoveProductToCart}>
        <S.LeftButton source={REDUCE} />
      </S.TouchableBox>

      <S.Divider source={LINE} />

      <S.TouchableBox onPress={handleAddProductToCart}>
        <S.RightButton source={ADD} />
      </S.TouchableBox>
    </S.Container>
  );
};

export default DualButton;
