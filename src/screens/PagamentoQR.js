import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CircleUser, Globe, Headset, LogOut, ChevronRight  } from 'lucide-react-native';

import { Input, InputIcon, InputSlot, SearchIcon, InputField } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";



export default function PagamentoQR() {
  const { email, displayName: nome } = auth.currentUser;

  return (
    <>
    
      <View style={estilos.container}>
        <Text style={estilos.titulo}>QR Code gerado</Text>

      
      </View>
    </>
  );
}

const estilos = {
  container: {
    flex: 1,
    backgroundColor: "#17191F",
  },
  titulo: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    paddingTop: 20,
  },
  pesquisa: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  pesquisaInput: {
    width: "90%",
    backgroundColor: "#282A37",
    borderWidth: 1,
    borderColor: "#282A37",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 11,
    borderRadius: 10
  },
  textoCampo: {
    color: "white"
  }
};
