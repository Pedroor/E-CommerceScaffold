import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 24px;
`;

export const PageTitle = styled.Text`
  ${(props) => props.theme.textVariants.header}
`;

export const Bag = styled.Image`
  width: 24;
  height: 24;
`;
