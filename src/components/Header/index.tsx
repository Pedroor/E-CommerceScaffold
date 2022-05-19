import { useNavigation } from "@react-navigation/native";
import React from "react";
import ARROWLEFT from "../../assets/ARROW_LEFT.png";
import * as S from "./styles";

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: React.FC<HeaderProps> = ({ title, routeName }) => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.TouchableBox onPress={() => navigate(routeName)}>
        <S.ArrowLeft source={ARROWLEFT} />
      </S.TouchableBox>
      <S.Title>{title}</S.Title>
      <S.Title />
    </S.Container>
  );
};

export default Header;
