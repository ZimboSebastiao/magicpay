import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";

import { Image } from "react-native";

// Importando os recursos de autenticação
import { auth } from "../../firebase.config";
// console.log("auth:", auth);

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";

import logo from "../../assets/images/logo.png";
import Cadastro from "../screens/Cadastro.js";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    // console.log("email:", email); // Adicione este log
    // console.log("senha:", senha); // Adicione este log

    if (!email || !senha) {
      Alert.alert("Atenção!", "Preencha e-mail e senha!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate("Home");
    } catch (error) {
      console.error("error:", error); // Adicione este log
      console.error(error.code);

      let mensagem;
      switch (error.code) {
        case "auth/invalid-credential":
          mensagem = "Dados inválidos!";
          break;
        case "auth/invalid-email":
          mensagem = "Endereço de e-mail inválido!";
          break;
        default:
          mensagem = "Houve um erro, tente mais tarde!";
          break;
      }
      Alert.alert("Ops!", mensagem);
    }
  };

  const recuperarSenha = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Recuperar senha", "Verifique sua caixa de e-mails.");
    } catch (error) {
      console.error("error:", error); // Adicione este log
    }
  };

  return (
    <>
      <View style={estilos.container}>
        <Image style={estilos.logo} source={logo} />
        <View style={estilos.formulario}>
          <TextInput
            onChangeText={(valor) => setEmail(valor)}
            placeholder="E-mail"
            placeholderTextColor="white" // Cor do texto do placeholder
            style={[estilos.input, { color: "white" }]}
          />
          <TextInput
            onChangeText={(valor) => setSenha(valor)}
            placeholder="Senha"
            placeholderTextColor="white" // Cor do texto do placeholder
            style={[estilos.input, { color: "white" }]}
            secureTextEntry
          />

          <View>
            <Pressable style={estilos.botaoRecuperar} onPress={recuperarSenha}>
              <Text style={estilos.textoBotaoRecuperar}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable style={estilos.botoes} onPress={login}>
              <Text style={estilos.textoBotao}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "auto",
    height: "35%",
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: "center",
    marginVertical: 50,
  },
  formulario: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#ccc",
    borderRadius: 7,
    marginVertical: 15,
  },
  botoes: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#FF7E3F",
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: "#FF7E3F",
    alignItems: "center",
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  botaoRecuperar: {
    padding: 0,
    marginVertical: 4,
    alignItems: "flex-end",
  },
  textoBotaoRecuperar: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  botaoCadastro: {
    padding: 0,
    marginVertical: 4,
    alignItems: "center",
  },
  textoBotaoCadastro: {
    fontSize: 14,
    color: "#fff",
  },
});
