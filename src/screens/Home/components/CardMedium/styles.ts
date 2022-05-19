import styled from "styled-components/native";

export const Container = styled.View`
  max-width: 180px;
  margin-right: 24px;
  margin-top: 24px;
`;

export const CardImage = styled.Image`
  width: 160px;
  height: 140px;
`;

export const Label = styled.Text`
  ${(props) => props.theme.textVariants.label};
  color: ${(props) => props.theme.colors.primary};
  margin-top: 4px;
`;

export const Title = styled.Text`
  ${(props) => props.theme.textVariants.title};
  color: ${(props) => props.theme.colors.black};
  margin-top: 4px;
`;

export const ProductValue = styled.Text`
  ${(props) => props.theme.textVariants.price};
  color: ${(props) => props.theme.colors.primary};
`;
