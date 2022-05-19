import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
  margin-left: 16px;
`;

export const CategoryLabel = styled.Text`
  ${(props) => props.theme.textVariants.label};
  color: ${(props) => props.theme.colors.semiGrey};
  margin-bottom: 8px;
`;

export const FlatList = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {},
})``;
