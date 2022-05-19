import styled from "styled-components/native";

export const Section = styled.Text`
  ${(props) => props.theme.textVariants.section}
`;

export const SectionContainer = styled.View`
  margin-top: 16px;
  margin-left: 16px;
`;
