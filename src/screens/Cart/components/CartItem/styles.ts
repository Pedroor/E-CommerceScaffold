import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 72px;
  margin: 14px;
  border-radius: 12px;

  background-color: ${(props) => props.theme.colors.primary};
`;
