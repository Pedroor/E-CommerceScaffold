import React from "react";
import { useNavigation } from "@react-navigation/native";
import CONFIRMATION from "../../assets/CONFIRMATION.png";
import Button from "../../components/Button";

import * as S from "./styles";

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <S.SafeContainer>
      <S.Container>
        <S.ConfirmationImage source={CONFIRMATION} />
        <S.Title>SUCESSO!</S.Title>
        <S.Subtitle>Compra realizada com sucesso, aproveite!</S.Subtitle>
      </S.Container>
      <S.ButtonContainer>
        <Button title="PROSSEGUIR" onPress={() => navigate("Home")} />
      </S.ButtonContainer>
    </S.SafeContainer>
  );
};

export default Confirmation;
