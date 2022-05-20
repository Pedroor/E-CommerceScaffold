import React from "react";
import DualButton from "../DualButton";

import * as S from "./styles";

const CartItem: React.FC = () => {
  return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductImage
          source={{
            uri: "https://zeedog.vteximg.com.br/arquivos/mochila-classic-verde-azul-roxo-zeedog-human-main-1.jpg",
          }}
        />
        <S.ProductInformation>
          <S.Title>Fjallraven - Foldsack</S.Title>
          <S.Price>1x $109.95</S.Price>
        </S.ProductInformation>
        <DualButton />
      </S.ProductContainer>
    </S.Container>
  );
};

export default CartItem;
