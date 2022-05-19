import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  width: 30px;
  height: 30px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid
  border-color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white}
`;

export const ButtonIcon = styled.Image`
  width: 10px;
  height: 10px;
`;
