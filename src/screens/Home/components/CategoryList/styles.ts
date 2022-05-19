import styled from "styled-components/native";

interface ActiveCategory {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-top: 16px;
  margin-left: 16px;
`;

export const CategoryContainer = styled.View`
  width: 51px;
  height: 21px;
  border-radius: 8px;
  padding: 6px 10px 6px 10px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CategoryName = styled.Text<ActiveCategory>`
  ${(props) => props.theme.textVariants.label}
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.black};
`;

export const CategoryLabel = styled.Text`
  ${(props) => props.theme.textVariants.label};
  color: ${(props) => props.theme.colors.semiGrey};
  margin-bottom: 8px;
`;
