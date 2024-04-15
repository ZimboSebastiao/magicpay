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
import { auth } from "../../firebase.config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { LinkText } from "@gluestack-ui/themed";
import Cadastro from "../screens/Cadastro.js";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha e-mail e senha");
      return;
    }
    // console.log(senha, email);

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace("Home");
    } catch (error) {
      console.error(error.code);
      let mensagem;
      switch (error.code) {
        case "auth/invalid-credential":
          mensagem = "Dados inválidos!";
          break;
        case "auth/invalid-email":
          mensagem = "Endereço de e-mal inválido!";
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
      Alert.alert("Recuperar senha", "Verifique a sua caixa de e-mails!");
    } catch (error) {
      console.error(error);
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
              <Text style={estilos.textoBotaoRecuperar}>Recuperar a senha</Text>
            </Pressable>

            <Pressable style={estilos.botoes} onPress={login}>
              <Text style={estilos.textoBotao}>Login</Text>
            </Pressable>

            <Pressable
              style={estilos.textoBotaoCadastro}
              onPress={recuperarSenha}
            >
              <Text style={{ color: "white" }}>
                Ainda não possui cadastro?{" "}
                <Text
                  style={estilos.textoBotaoCadastro}
                  onPress={() => navigation.navigate("Cadastro")}
                >
                  Cadastre-se!
                </Text>
              </Text>
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

    marginVertical: 50,
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
    color: "#6495ED",
    textDecorationLine: "underline",
  },
  botaoCadastro: {
    padding: 0,
    marginVertical: 4,
    alignItems: "center",
  },
  textoBotaoCadastro: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6495ED",
    textDecorationLine: "underline",
    alignItems: "center",
  },
});
