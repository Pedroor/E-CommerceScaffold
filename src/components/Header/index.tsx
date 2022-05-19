import React from "react";
import ARROWLEFT from "../../assets/ARROW_LEFT.png";
import * as S from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.ArrowLeft source={ARROWLEFT} />
      <S.Title>{title}</S.Title>
      <S.Title />
    </S.Container>
  );
};

export default Header;
