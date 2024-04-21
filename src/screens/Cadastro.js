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

import destaque from "../../assets/images/logo.png";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [chave, setChave] = useState("");
  const [numero, setNumero] = useState("");
  const [profisao, setProfisao] = useState("");

  const cadastrar = async () => {
    if (!email || !senha || !nome || !chave || !profisao || !cpf || !numero) {
      Alert.alert("Atenção!", "Preencha todos os dados");
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
          <Text style={{fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Criar uma conta</Text>
        </View>
        <View style={estilos.formulario}>

          <View>
            <Text style={estilos.labeltexto}>Nome Completo</Text>
            <TextInput
              placeholder="Seu nome"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="default"
              onChangeText={(valor) => setNome(valor)}
            />
          </View>

          <View>
            <Text style={estilos.labeltexto}>E-mail</Text>
            <TextInput
              placeholder="Seu E-mail"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="email-address"
              onChangeText={(valor) => setEmail(valor)}
            />
          </View>
          <View>
            <Text style={estilos.labeltexto}>CPF</Text>
            <TextInput
              onChangeText={(valor) => setCpf(valor)}
              placeholder="CPF"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="numeric" 
            />
          </View>

          <View>
            <Text style={estilos.labeltexto}>Sua Chave Pix</Text>
            <TextInput
              onChangeText={(valor) => setChave(valor)}
              placeholder="Chave pix do banco Efí"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text style={estilos.labeltexto}>Celular</Text>
            <TextInput
              onChangeText={(valor) => setNumero(valor)}
              placeholder="(11) 97360 - 4933"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={estilos.labeltexto}>Profisão</Text>
            <TextInput
              onChangeText={(valor) => setProfisao(valor)}
              placeholder="ex: Comerciante"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text style={estilos.labeltexto}>Palavra-Passe</Text>
            <TextInput
              onChangeText={(valor) => setSenha(valor)}
              placeholder="Nova Senha"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              secureTextEntry
            />
          </View>
          <View>
            <Pressable style={estilos.botoes} onPress={cadastrar}>
              <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>

            <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{ color: "#151515", fontWeight: "bold" }}>
                Já possui uma conta?{" "}
                <Text
                  style={estilos.textoBotaoCadastro}
                  onPress={() => navigation.navigate("Login")}
                >
                  Faça o seu Login
                </Text>
            </Text>
            </View>
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
    marginTop: 30,
    width: 200,
    height: 200,
    alignSelf: "center",
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
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    color: "#6f6f6f",
    borderRadius: 7,
    marginVertical: 15,
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
  labeltexto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textoBotaoCadastro: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#538dfd",
    alignItems: "center",
  },
});
