import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CircleUser } from 'lucide-react';

import { ButtonText, Button, VStack, HStack, Avatar, AvatarFallbackText, AvatarBadge, Icon, GluestackUIProvider, } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { logout } from "../components/Logout";


export default function Configuracoes() {
  const { email, displayName: nome } = auth.currentUser;

  return (
  <>
    <GluestackUIProvider config={config}>
      <View style={estilos.container}>

      <View style={estilos.avatarUser}>
          <VStack  space="2xl">
          <HStack space="md">
            <Avatar  bgColor="$indigo600" size="xl" >
              <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
              <AvatarBadge $dark-borderColor="$black"/>
            </Avatar>
          </HStack>
          </VStack>
        <View style={estilos.avatarTexto}>
          <Text style={estilos.textoCor} size="sm" >{nome || "Visitante"}</Text>
          <Text style={estilos.cargoCor} size="sm" >Comerciante</Text>
        </View>
        </View>

        <View style={estilos.botoes}>


      <Button style={estilos.botao} >
        <ButtonText>
        <CircleUser />
          Minha conta
        </ButtonText>
      </Button>

      <Button style={estilos.botao}>
        <ButtonText>
          Idioma
        </ButtonText>
      </Button>

      <Button style={estilos.botao}>
        <ButtonText>
          Suporte
        </ButtonText>
      </Button>

      <Button style={estilos.botao} onPress={logout}>
        <ButtonText>
          Sair
        </ButtonText>
      </Button>

      </View>

     
     
      </View>
    </GluestackUIProvider>
    




  
  </>
  );
}

const estilos = {
  container: {
    flex: 1,
    backgroundColor: "#17191F",
   
  },
  avatarUser: {
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    
  },
  avatarTexto: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  textoCor: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  cargoCor: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  botoes: {
    backgroundColor: "red",
    padding: 24,
  },
  botao: {
    backgroundColor: "#17191F",
    marginBottom: 45,
  }
};
