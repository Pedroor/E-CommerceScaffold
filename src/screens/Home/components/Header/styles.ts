import styled from "styled-components/native";

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

export const TouchableBox = styled.TouchableOpacity``;

export const IndicationCartAmount = styled.View`
  position: absolute;
  top: -5px;
  right: -10px;
  width: 20px;
  height: 20px;
  z-index: 2;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const TextRed = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  align-self: center;
  ${(props) => props.theme.textVariants.titleHeader}
`;
