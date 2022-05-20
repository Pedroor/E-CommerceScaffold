import React from "react";
import ADD from "../../../../assets/ADD_CART.png";
import REDUCE from "../../../../assets/REDUCE.png";
import LINE from "../../../../assets/Line.png";

import * as S from "./styles";

const DualButton: React.FC = () => {
  return (
    <S.Container>
      <S.TouchableBox onPress={() => console.log("LEFT")}>
        <S.LeftButton source={REDUCE} />
      </S.TouchableBox>

      <S.Divider source={LINE} />

      <S.TouchableBox onPress={() => console.log("RIGHT")}>
        <S.RightButton source={ADD} />
      </S.TouchableBox>
    </S.Container>
  );
};

export default DualButton;
