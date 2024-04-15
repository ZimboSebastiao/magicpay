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
