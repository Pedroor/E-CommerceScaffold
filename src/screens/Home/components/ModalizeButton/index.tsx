import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import Button from "../../../../components/Button";

const ModalizeButton: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const { navigate } = useNavigation();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        withHandle={true}
        withOverlay={true}
        modalHeight={110}
        rootStyle={{
          bottom: 0,
          position: "absolute",
        }}
      >
        <Button title="IR PARA O CARRINHO" onPress={() => navigate("Cart")} />
      </Modalize>
    </>
  );
};

export default ModalizeButton;
