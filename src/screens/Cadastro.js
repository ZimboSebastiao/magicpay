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
  ScrollView,
} from "react-native";

import { Image } from "react-native";

import destaque from "../../assets/images/cadastro.gif";

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
          onPress: () => navigation.navigate("Home"),
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
      <ScrollView style={estilos.container}>
        <View>
          <Image style={estilos.destaque} source={destaque} />
          <Text style={estilos.titulo}>Cadastro</Text>
        </View>
        <View style={estilos.formulario}>
          <TextInput
            placeholder="Nome Completo"
            placeholderTextColor="white"
            style={[estilos.input, { color: "white" }]}
            keyboardType="default"
            onChangeText={(valor) => setNome(valor)}
          />

          <TextInput
            placeholder="Seu E-mail"
            placeholderTextColor="white"
            style={[estilos.input, { color: "white" }]}
            keyboardType="email-address"
            onChangeText={(valor) => setEmail(valor)}
          />

          <TextInput
            onChangeText={(valor) => setSenha(valor)}
            placeholder="Nova Senha"
            placeholderTextColor="white"
            style={[estilos.input, { color: "white" }]}
            secureTextEntry
          />
          <View>
            <Pressable style={estilos.botoes} onPress={cadastrar}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  background: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "auto",
    height: "35%",
  },
  destaque: {
    width: 210,
    height: 250,
    alignSelf: "center",
    marginVertical: 20,
  },
  titulo: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
    color: "#FF7E3F",
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
    borderColor: "#ccc",
    borderRadius: 7,
    marginVertical: 10,
    height: 47,
  },
  botoes: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#FF7E3F",
    borderRadius: 7,
    marginVertical: 20,
    backgroundColor: "#FF7E3F",
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
