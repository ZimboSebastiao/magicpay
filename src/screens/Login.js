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
            style={estilos.input}
          />
          <TextInput
            onChangeText={(valor) => setSenha(valor)}
            placeholder="Senha"
            style={estilos.input}
            secureTextEntry
          />
          <View>
            <Pressable style={estilos.botaoRecuperar} onPress={recuperarSenha}>
              <Text style={estilos.textoBotaoRecuperar}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable style={estilos.botoes} onPress={login}>
              <Text style={estilos.textoBotao}>Login</Text>
            </Pressable>

            <Pressable style={estilos.botaoCadastro} onPress={Cadastro}>
              <Text
                style={estilos.textoBotaoCadastro}
                onPress={() => navigation.navigate("Cadastro")}
              >
                Não tem cadastro? Então Cadastre-se !!!
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
    backgroundColor: "white",
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
    borderColor: "#000",
    borderRadius: 40,
    marginVertical: 20,
  },
  botoes: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#B22222",
    borderRadius: 40,
    marginVertical: 20,
    backgroundColor: "#B22222",
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
    color: "grey",
  },
  botaoCadastro: {
    padding: 0,
    marginVertical: 4,
    alignItems: "center",
  },
  textoBotaoCadastro: {
    fontSize: 14,
    color: "#2f2e2e",
  },
});
