import { FlatList } from "react-native";
import { ProductProps } from "../../../../@types/interfaces";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
  flex: 1;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const List = styled(FlatList as new () => FlatList<ProductProps>).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
  numColumns: 2,
})``;
