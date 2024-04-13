import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CircleUser, Globe, Headset, LogOut, ChevronRight  } from 'lucide-react-native';

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
        <CircleUser color="#3B40FF" size={38}/>
        <ButtonText style={estilos.botaoTexto}>
          Minha conta
        </ButtonText>
        <ChevronRight color="#787373" size={34} />
      </Button>

      <Button style={estilos.botao}>
      <Globe  color="#3B40FF" size={38} />
        <ButtonText style={estilos.botaoTexto} >
          Idioma
        </ButtonText>
        <ChevronRight color="#787373" size={34} />
      </Button>

      <Button style={estilos.botao}>
        <Headset color="#3B40FF" size={38} />
        <ButtonText style={estilos.botaoTexto}>
          Suporte
        </ButtonText>
        <ChevronRight color="#787373" size={34} />
      </Button>

      <Button style={estilos.botao} onPress={logout}>
        <LogOut color="#3B40FF" size={38} />
        <ButtonText style={estilos.botaoTexto}>
          Sair
        </ButtonText>
        <ChevronRight color="#17191F" size={34} />
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
    padding: 10,
  },
  botao: {
    backgroundColor: "#17191F",
    marginBottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    alignItems: "center",

  },
  botaoTexto: {
    width: "60%"
  }
};
