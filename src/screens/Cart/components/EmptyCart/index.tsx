import { useNavigation } from "@react-navigation/native";
import React from "react";
import EmptyBag from "../../../../assets/EMPTY_BAG.png";
import Button from "../../../../components/Button";

import * as S from "./styles";

const EmptyCart: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <S.Container>
        <S.MessageContainer>
          <S.EmptyBag source={EmptyBag} />
          <S.Message>{`Nenhum item adicionado \n no carrinho.`}</S.Message>
        </S.MessageContainer>

        <Button title="ADICIONAR ITENS" onPress={() => navigate("Home")} />
      </S.Container>
    </>
  );
};

export default EmptyCart;
