import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
