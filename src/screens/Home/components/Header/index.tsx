import React from "react";
import CartBag from "../../../../assets//BAG.png";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.RowContainer>
      <S.PageTitle>Produtos</S.PageTitle>
      <S.Bag source={CartBag} />
    </S.RowContainer>
  );
};

export default Header;
