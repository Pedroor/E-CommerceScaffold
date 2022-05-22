import styled from "styled-components/native";

export const ValueInformationContainer = styled.View`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${(props) => props.theme.textVariants.title};
`;
