import React from "react";
import ADD from "../../assets/ADD.png";

import * as S from "./styles";

const FloatingButton: React.FC = () => {
  return (
    <S.ButtonContainer>
      <S.ButtonIcon source={ADD} />
    </S.ButtonContainer>
  );
};

export default FloatingButton;
