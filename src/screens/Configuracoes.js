import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  CircleUser,
  Globe,
  Headset,
  LogOut,
  ChevronRight,
  Navigation,
} from "lucide-react-native";

import {
  ButtonText,
  Button,
  VStack,
  HStack,
  Avatar,
  AvatarFallbackText,
  AvatarBadge,
  Icon,
  GluestackUIProvider,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { logout } from "../components/Logout";
import { ScrollView } from "react-native";

export default function Configuracoes({ navigation }) {
  console.log(navigation);
  const { email, displayName: nome } = auth.currentUser;

  return (
    <>
      <GluestackUIProvider config={config}>
        <ScrollView style={estilos.container}>
          <View style={estilos.avatarUser}>
            <VStack space="2xl">
              <HStack space="md">
                <Avatar bgColor="$indigo600" size="xl">
                  <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
                  <AvatarBadge $dark-borderColor="$black" />
                </Avatar>
              </HStack>
            </VStack>
            <View style={estilos.avatarTexto}>
              <Text style={estilos.textoCor} size="sm">
                {nome || "Visitante"}
              </Text>
              <Text style={estilos.cargoCor} size="sm">
                Comerciante
              </Text>
            </View>
          </View>

          <View style={estilos.botoes}>
            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("MinhaConta");

                // console.log("suporte");
              }}
            >
              <CircleUser color="#FF7E3F" size={38} />
              <ButtonText style={estilos.botaoTexto}>Minha conta</ButtonText>
              <ChevronRight color="#FF7E3F" size={34} />
            </Button>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Idiomas");

                // console.log("suporte");
              }}
            >
              <Globe color="#FF7E3F" size={38} />
              <ButtonText style={estilos.botaoTexto}>Idioma</ButtonText>
              <ChevronRight color="#FF7E3F" size={34} />
            </Button>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Suporte");

                // console.log("suporte");
              }}
            >
              <Headset color="#FF7E3F" size={38} />
              <ButtonText style={estilos.botaoTexto}>Suporte</ButtonText>
              <ChevronRight color="#FF7E3F" size={34} />
            </Button>

            <Button style={estilos.botao} onPress={logout}>
              <LogOut color="#FF7E3F" size={38} />
              <ButtonText style={estilos.botaoTexto}>Sair</ButtonText>
              <ChevronRight color="#FF7E3F" size={34} />
            </Button>
          </View>
        </ScrollView>
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
    marginVertical: 10,
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
    width: "60%",
  },
};
