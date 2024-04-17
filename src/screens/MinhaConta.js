import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MinhaConta = () => {
  const handleTrocarSenha = () => {
    // Implemente a lógica para trocar a senha aqui
    console.log("Trocar senha");
  };

  const handleTrocarNome = () => {
    // Implemente a lógica para trocar o nome aqui
    console.log("Trocar nome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações da Conta</Text>
      <TouchableOpacity style={styles.botao} onPress={handleTrocarSenha}>
        <Text style={styles.textoBotao}>Trocar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={handleTrocarNome}>
        <Text style={styles.textoBotao}>Trocar Nome</Text>
      </TouchableOpacity>
      {/* Adicione mais botões e funcionalidades conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
  },
});

export default MinhaConta;
