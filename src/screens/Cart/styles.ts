import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Section = styled.Text`
  ${(props) => props.theme.textVariants.section}
  margin-top: 42px;
  margin-left: 18px;
`;

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
