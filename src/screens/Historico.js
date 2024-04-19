import React, { useState, useEffect } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { ScanBarcode, Send, RotateCcw, Search  } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { Input, InputIcon, InputSlot, SearchIcon, InputField } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  GluestackUIProvider,
  Card,
} from "@gluestack-ui/themed";



export default function Historico() {
  const { email, displayName: nome } = auth.currentUser;
  const navigation = useNavigation();
  const [pixs, setPixs] = useState([]);

  const formatarHorario = (horario) => {
    return format(new Date(horario), "MMMM dd, yyyy HH:mm");
  };

  useEffect(() => {
    async function fetchPixs() {
      try {
        const response = await axios.get('https://api-pix-j9w9.onrender.com/v2/pix');
        console.log('Resposta da API Pix:', response.data);
        setPixs(response.data.pix);
         
      } catch (error) {
        console.error('Erro ao buscar Pixs:', error.message);
      }
    }
    fetchPixs();
  }, []);

  return (
    <>
      <GluestackUIProvider config={config}>
        <ScrollView style={estilos.container}>
          <Text style={estilos.titulo}>Carteira</Text>
          <Text style={estilos.texto}>Saldo disponível na carteira</Text>
          <Text style={estilos.textoSaldo}>R$ 3.000</Text>

          <View style={estilos.botoes}>

          <Pressable style={estilos.botao}>
            <RotateCcw color="#538dfd" size={25}/>
            <Text style={estilos.textosCartao}>devolver</Text>
          </Pressable>

          <Pressable style={estilos.botao} onPress={() => {navigation.navigate("Pix")}} >
            <ScanBarcode color="#538dfd" size={25}/>
            <Text style={estilos.textosCartao}>Pagar</Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Send color="#538dfd" size={25}/>
            <Text style={estilos.textosCartao}>Enviar</Text>
          </Pressable>
          </View>

          {/* INPUT DE PESQUISA */}
          <View style={estilos.pesquisa}>
            <Input style={estilos.pesquisaInput}  variant="rounded"  size="lg">
              <InputSlot pl="$3">
              <Search color="#6f6f6f" m="$2" w="$3" h="$3" />
              </InputSlot>
              <InputField style={estilos.textoCampo} placeholder="Buscar por Nome" />
            </Input>
          </View>

          <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 10 }}>
            <Text style={{ color: "#151515", fontWeight: "bold", fontSize: 18}}>Transações Recentes</Text>
            <Text style={{color: "#538dfd", fontWeight: "bold", fontSize: 14}}>Ver Mais</Text>
          </View>

          {pixs.map((pix, index) => (
          <Card key={index} p="$4" maxWidth={360} m="$3">
              <Pressable key={index} onPress={() => console.log(pix)}>
                <View  style={{flexDirection: "row",justifyContent: "space-between", marginBottom: 6}}>
                <Text style={{fontWeight: "bold", fontSize: 15}}>{` ${pix.chave}`}</Text>
                <Text style={{fontWeight: "bold", fontSize: 15, color: "#367F04"}}>{`+ R$ ${pix.valor}`}</Text>

                </View>
                <Text style={{fontWeight: "bold", fontSize: 14, color: "#6f6f6f"}}>{`${formatarHorario(pix.horario)}`}</Text>
              </Pressable>
          </Card>
            ))}
        
        </ScrollView>
      </GluestackUIProvider>
    </>
  );
}

const estilos = {
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    color: "#151515",
    paddingTop: 30,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    color: "#6f6f6f",
    paddingTop: 30,
    fontWeight: "bold",
  },
  textoSaldo: {
    fontSize: 32,
    textAlign: "center",
    color: "#151515",
    paddingTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    padding: 3,
  },
  botao: {
    padding: 3,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#e4ecff",
    width: "13%",
    borderRadius: 10,
    marginLeft: 19
  },
  textosCartao: {
    fontSize: 10
  },
  pesquisa: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 30,
  },
  pesquisaInput: {
    width: "95%",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    elevation: 3,
    borderColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    borderRadius: 10
  },
  textoCampo: {
    color: "#6f6f6f",

  }
};
