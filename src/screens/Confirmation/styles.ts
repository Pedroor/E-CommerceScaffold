import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ConfirmationImage = styled.Image`
  width: 160px;
  height: 160px;
`;

export const Title = styled.Text`
  margin-top: 30px;
  ${(props) => props.theme.textVariants.confirmationTitle};
  color: ${(props) => props.theme.colors.white};
`;

export const Subtitle = styled.Text`
  margin-top: 12px;
  ${(props) => props.theme.textVariants.confirmationSubtitle};
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonContainer = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 24px;
`;
