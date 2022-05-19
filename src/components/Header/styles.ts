import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 8px;
  margin-top: 16px;
`;

export const ArrowLeft = styled.Image`
  width: 8px;
  height: 10px;
`;

export const Title = styled.Text`
  ${(props) => props.theme.textVariants.titleHeader};
  color: ${(props) => props.theme.colors.subtitle};
`;

export const TouchableBox = styled.TouchableOpacity``;
