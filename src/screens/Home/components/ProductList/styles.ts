import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
  flex: 1;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
  numColumns: 2,
})``;
