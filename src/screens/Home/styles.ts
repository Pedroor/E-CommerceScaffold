import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;
