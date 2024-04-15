
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

const Configuracoes = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logout realizado com sucesso!");
        // Aqui você pode navegar para a tela de login ou fazer qualquer outra ação necessária após o logout
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Ajuda</Text>
        <TouchableOpacity style={estilos.option}>
          <FontAwesome5 name="question-circle" size={20} color="black" />
          <Text style={estilos.optionText}>Central de Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.option}>
          <FontAwesome5 name="envelope" size={20} color="black" />
          <Text style={estilos.optionText}>Contatar Suporte</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Perfil</Text>
        <TouchableOpacity style={estilos.option}>
          <FontAwesome5 name="user" size={20} color="black" />
          <Text style={estilos.optionText}>Meus Dados</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Minhas Chaves PIX</Text>
        <TouchableOpacity style={estilos.option}>
          <FontAwesome5 name="qrcode" size={20} color="black" />
          <Text style={estilos.optionText}>Cadastrar Nova Chave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.option}>
          <FontAwesome5 name="list" size={20} color="black" />
          <Text style={estilos.optionText}>Listar Chaves Cadastradas</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={estilos.logoutButton} onPress={handleLogout}>
        <Text style={estilos.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF7E3F",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  logoutButton: {
    backgroundColor: "#FF7E3F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Configuracoes;
=======
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

