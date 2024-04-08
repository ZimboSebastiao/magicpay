import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Image } from "react-native";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async () => {
    if (!email || !senha || !nome) {
      Alert.alert("Atenção!", "Preencha nome, e-mail e senha!");
      return;
    }

    try {
      const contaUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      if (contaUsuario.user) {
        await updateProfile(auth.currentUser, { displayName: nome });
        console.log(contaUsuario.user.displayName);
      }

      Alert.alert("Cadastro", "Seu cadastro foi concluído com sucesso!", [
        {
          style: "cancel",
          text: "Permanecer",
          onPress: () => {
            return;
          },
        },
        {
          style: "default",
          text: "Ir para a Home",
          onPress: () => navigation.navigate("Pontos"),
        },
      ]);
    } catch (error) {
      // console.error(error.code);
      let mensagem;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensagem = "E-mail já cadastrado!";
          break;
        case "auth/weak-password":
          mensagem = "Senha fraca (mínimo de 6 caracteres)";
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

  return (
    <>
      <View style={estilos.container}>
        <View style={estilos.formulario}>
          <TextInput
            placeholder="Nome Completo"
            style={estilos.input}
            keyboardType="default"
            onChangeText={(valor) => setNome(valor)}
          />

          <TextInput
            placeholder="Seu E-mail"
            style={estilos.input}
            keyboardType="email-address"
            onChangeText={(valor) => setEmail(valor)}
          />

          <TextInput
            onChangeText={(valor) => setSenha(valor)}
            placeholder="Nova Senha"
            style={estilos.input}
            secureTextEntry
          />
          <View>
            <Pressable style={estilos.botoes} onPress={cadastrar}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
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
  formulario: {
    marginVertical: 30,
    padding: 10,

    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#207FDE",
    borderRadius: 40,
    marginVertical: 10,
    height: 47,
  },
  botoes: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#207FDE",
    borderRadius: 40,
    marginVertical: 20,
    backgroundColor: "#207FDE",
    alignItems: "center",
  },
  botaoRecuperar: {
    padding: 0,
    marginVertical: 4,
    alignItems: "flex-end",
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },

  textoBotaoRecuperar: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
  },
});
