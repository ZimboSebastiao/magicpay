import React, { useState } from "react";
import { auth } from "../../firebase.config";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CircleUser,
  MessageCircleQuestion,
  LogOut,
  MapPinned,
  LockKeyhole,
  CircleHelp,
  KeyRound,
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
  Card,
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

          <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#151515", paddingTop: 30,}}>Perfil</Text>

          <View style={estilos.avatarEtexto}>

          <View style={estilos.avatarUser}>
            <VStack space="2xl">
              <HStack space="md">
                <Avatar bgColor="$indigo600" size="lg">
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

          </View>

          <View style={{padding: 20}}>
            <Card style={estilos.cartao}>
              <View style={estilos.cartaoTitulo}>
                 <Text style={estilos.tituloCor}>Saldo Atual</Text>
                 <Text style={estilos.tituloCor}>Renda</Text>
                 <Text style={estilos.tituloCor}>Despesa</Text>
              </View>

              <View style={estilos.cartaoValores}>
                 <Text style={estilos.valoresCor}>R$ 3.000</Text>
                 <Text style={estilos.valoresCor}>R$ 2.400</Text>
                 <Text style={estilos.valoresCor}>R$ 5.400</Text>
              </View>
            </Card>
          </View>

          <View style={estilos.botoes}>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("MinhaConta");
              }}
            >
              <CircleUser color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Minha conta</ButtonText>
              
            </Button>
            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("MinhaConta");
              }}
            >
              <MapPinned color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Endereço</ButtonText>
              
            </Button>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("MinhaConta");
              }}
            >
              <KeyRound color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Mudar Palavra-passe</ButtonText>
              
            </Button>

            
            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Idiomas");
              }}
            >
              <MessageCircleQuestion color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>FAQs</ButtonText>
            </Button>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Idiomas");
              }}
            >
              <LockKeyhole color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Política de Privacidade</ButtonText>
            </Button>

            <Button
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Suporte");
              }}
            >
              <CircleHelp color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Central de Ajuda</ButtonText>
            </Button>

            <Button style={estilos.botao} onPress={logout}>
              <LogOut color="#538dfd" size={26} />
              <ButtonText color="#151515" style={estilos.botaoTexto}>Sair</ButtonText>
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
    backgroundColor: "#f0f4f8",
  },
  avatarUser: { 
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTexto: {
    color: "#6f6f6f", 
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textoCor: {
    color: "#151515",
    fontSize: 15,
    fontWeight: "bold",
  },
  cargoCor: {
    color: "#6f6f6f",
    fontSize: 15,
    fontWeight: "bold",
  },
  cartao: {
    padding: 25,
    backgroundColor: "#538dfd",
  },
  cartaoTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tituloCor: {
    color: "#ffffff",
  },
  cartaoValores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  valoresCor: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  botoes: {
    padding: 20,
  },
  botao: {
    backgroundColor: "#f0f4f8",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  botaoTexto: {
    paddingLeft: 15,
    fontWeight: "bold"
  },
  avatarEtexto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",    
  }
};
