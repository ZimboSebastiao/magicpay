import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { ScanBarcode, Send  } from 'lucide-react-native';

import { Input, InputIcon, InputSlot, SearchIcon, InputField } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";



export default function Historico() {
  const { email, displayName: nome } = auth.currentUser;

  return (
    <>
    
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Carteira</Text>
        <Text style={estilos.texto}>Saldo disponível na carteira</Text>
        <Text style={estilos.textoSaldo}>R$ 3.000</Text>

        <View style={estilos.botoes}>

        <Pressable style={estilos.botao}>
          <ScanBarcode color="#538dfd" size={25}/>
          <Text style={estilos.textosCartao}>Pagar</Text>
        </Pressable>

        <Pressable style={estilos.botao}>
          <ScanBarcode color="#538dfd" size={25}/>
          <Text style={estilos.textosCartao}>Pagar</Text>
        </Pressable>

        <Pressable style={estilos.botao}>
          <Send color="#538dfd" size={25}/>
          <Text style={estilos.textosCartao}>Enviar</Text>
        </Pressable>
        </View>

        <View style={estilos.pesquisa}>
        <Input style={estilos.pesquisaInput}  variant="rounded"  size="lg">
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField style={estilos.textoCampo} placeholder="Buscar por Nome ou Chave Pix" />
        </Input>
        </View>

      
      </View>
    </>
  );
}

const estilos = {
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    color: "#151515",
    paddingTop: 30,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    color: "#6f6f6f",
    paddingTop: 30,
    fontWeight: "bold",
  },
  textoSaldo: {
    fontSize: 32,
    textAlign: "center",
    color: "#151515",
    paddingTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    padding: 3,
  },
  botao: {
    padding: 3,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#e4ecff",
    width: "12%",
    borderRadius: 10,
    marginLeft: 19
  },
  textosCartao: {
    fontSize: 10
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
