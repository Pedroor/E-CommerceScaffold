import React from "react";
import { TouchableOpacityProps } from "react-native";
import ADD from "../../assets/ADD.png";

import * as S from "./styles";

const FloatingButton: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <S.ButtonContainer {...rest}>
      <S.ButtonIcon source={ADD} />
    </S.ButtonContainer>
  );
};

export default FloatingButton;
