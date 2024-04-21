import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Spinner, HStack,  } from '@gluestack-ui/themed';
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
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const contaUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      if (contaUsuario.user) {
        await updateProfile(auth.currentUser, { displayName: nome });
        console.log(contaUsuario.user.displayName);
      }
      setIsLoading(false);

      
    } catch (error) {
      setIsLoading(false);
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

  const formatarCelular = (input) => {
    let formattedInput = input.replace(/\D/g, "");
    
    formattedInput = formattedInput.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2 - $3");

    return formattedInput;
  };

  const handleNumeroChange = (input) => {
    if (input.length <= 15) {
      setNumero(formatarCelular(input));
    }
  };

  const formatarCPF = (input) => {
    let formattedInput = input.replace(/\D/g, "");

    formattedInput = formattedInput.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return formattedInput;
  };

  const handleCPFChange = (input) => {
    if (input.length <= 14) {
      setCpf(formatarCPF(input));
    }
  };

  return (
    <>
    
      
      <ScrollView style={estilos.container}>
      {isLoading && (
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)", 
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999, 
        }}>
          <HStack space="sm">
            <Spinner />
            <Text size="md">Por favor, aguarde!</Text>
          </HStack>
        </View>
          )}
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
              value={cpf}
              onChangeText={handleCPFChange}
              placeholder="000.000.000-00"
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
              value={numero}
              onChangeText={handleNumeroChange}
              placeholder="(11) 97360 - 4933"
              placeholderTextColor="#6f6f6f"
              style={[estilos.input, { color: "#6f6f6f" }]}
              keyboardType="phone-pad"
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
