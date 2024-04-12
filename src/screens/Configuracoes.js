import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { ButtonText, Button } from "@gluestack-ui/themed";
import { logout } from "../components/Logout";

export default function Configuracoes() {
 

  return (
  <>
   <Text>Olá</Text>
   <Button onPress={logout}>
    <ButtonText>
      Sair
    </ButtonText>
   </Button>
  
  </>
  );
}

const estilos = {
 
};
