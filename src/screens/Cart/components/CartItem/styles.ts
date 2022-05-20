import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 72px;
  margin: 14px;
  border-radius: 12px;

  background-color: rgba(135, 117, 254, 0.18);
`;

export const ProductContainer = styled.View`
  margin: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 38px;
  height: 50px;
`;

export const ProductInformation = styled.View`
  margin-top: 4px;
`;

export const Title = styled.Text`
  ${(props) => props.theme.textVariants.title};
`;

export const Price = styled.Text`
  ${(props) => props.theme.textVariants.price};
  color: ${(props) => props.theme.colors.primaryDark};
`;
