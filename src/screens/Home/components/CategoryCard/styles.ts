import styled from "styled-components/native";

interface ActiveCategory {
  isActive: boolean;
}

export const CategoryContainer = styled.View<ActiveCategory>`
  width: 60px;
  height: 24px;
  border-radius: 8px;
  margin-left: 4px;
  padding: 6px 10px 6px 10px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.categoryCardGray};
`;

export const CategoryName = styled.Text<ActiveCategory>`
  ${(props) => props.theme.textVariants.label}
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.subtitle};
  text-align: center;
`;

export const TouchableBox = styled.TouchableOpacity``;
