import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-left: 24px;
  margin-right: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-width: 1;
  border-radius: 28px;
  background-color: ${(props) => props?.theme?.colors?.primaryDark};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => theme.textVariants.buttonTitle};
  font-size: 18px;
  color: ${(props) => props.theme.colors?.white};
`;
