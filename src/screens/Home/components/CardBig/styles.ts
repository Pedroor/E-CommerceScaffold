import styled from "styled-components/native";

export const Container = styled.View`
  max-width: 200px;
`;

export const CardImage = styled.Image`
  width: 180px;
  height: 180px;
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

export const Subtitle = styled.Text`
  ${(props) => props.theme.textVariants.subtitle};
  color: ${(props) => props.theme.colors.subtitle};
  margin-top: 4px;
`;
