import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 12,
  },
  numColumns: 2,
})``;
