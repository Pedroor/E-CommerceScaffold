import { FlatList } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;

export const List = styled(FlatList as new () => FlatList<ProductProps>).attrs({
  horizontal: true,
  contentContainerStyle: {},
})``;
