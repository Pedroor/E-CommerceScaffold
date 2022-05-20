import styled from "styled-components/native";

export const Container = styled.View`
    width: 80px;
    flex-direction: row;

    height:22px;
    border-radius: 30px;
    padding:13px 20px 13px 20px;
    justify-content:space-between;
    align-items:center;
    background-color:${(props) => props.theme.colors.white};
    border: 0.5px 
    border-color: ${(props) => props.theme.colors.semiGrey};
`;

export const LeftButton = styled.Image`
  width: 12px;
  height: 4px;
  align-self: center;
`;

export const RightButton = styled.Image`
  width: 10px;
  height: 10px;
  align-self: center;
`;

export const Divider = styled.Image`
  width: 1px;
  height: 30px;
`;

export const TouchableBox = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View``;
