import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 64px;
`;

export const MessageContainer = styled.View`
  margin-top: 128px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${(props) => props.theme.textVariants.title}
  margin-top: 16px;
  color: ${(props) => props.theme.colors.semiGrey};
`;

export const EmptyBag = styled.Image`
  width: 57px;
  height: 68px;
`;
