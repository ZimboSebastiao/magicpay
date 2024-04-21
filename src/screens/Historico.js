import React, { useState, useEffect } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { auth } from "../../firebase.config";
import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { ScanBarcode, Send, RotateCcw, Search  } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { Input, InputIcon, InputSlot, SearchIcon, InputField, Spinner, HStack,   } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {GluestackUIProvider, Card, Center, Button, ButtonText, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading, ModalCloseButton, Icon, ModalBody, ModalFooter, CloseIcon } from "@gluestack-ui/themed";



export default function Historico() {
  const { email, displayName: nome } = auth.currentUser;
  const navigation = useNavigation();
  const [pixs, setPixs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPixIndex, setSelectedPixIndex] = useState(null);
  const ref = React.useRef(null)
  const [saldoConta, setSaldoConta] = useState(null);

  const formatarHorario = (horario) => {
    return format(new Date(horario), "MMMM dd, yyyy HH:mm");
  };

  useEffect(() => {
    async function fetchSaldoConta() {
      try {
        const response = await axios.get('https://api-pix-j9w9.onrender.com/get-account-balance');
        console.log('Saldo da conta:', response.data);
        setSaldoConta(response.data.saldo);
      } catch (error) {
        console.error('Erro ao buscar saldo da conta:', error.message);
      }
    }
    fetchSaldoConta();
  }, []);

  useEffect(() => {
    async function fetchPixs() {
      try {
        const response = await axios.get('https://api-pix-j9w9.onrender.com/v2/pix');
        console.log('Resposta da API Pix:', response.data);
        setPixs(response.data.pix);
        setIsLoading(false);
         
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
                <Text size="md">Carregando os dados, aguarde!</Text>
            </HStack>
              </View>
            )}

          <Text style={estilos.titulo}>Carteira</Text>
          <Text style={estilos.texto}>Saldo disponível na carteira</Text>
          <Text style={estilos.textoSaldo}>R$ {saldoConta}</Text>

          <View style={estilos.botoes}>
            <Pressable style={estilos.botao}>
              <RotateCcw color="#538dfd" size={25}/>
              <Text style={estilos.textosCartao}>devolver</Text>
            </Pressable>

            <Pressable style={estilos.botao} onPress={() => {navigation.navigate("Pix")}}>
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
          <Card key={index} p="$4" maxWidth={360} m="$3" >
              <Pressable key={index} onPress={() => setSelectedPixIndex(index)} ref={ref}>
                <View  style={{flexDirection: "row",justifyContent: "space-between", marginBottom: 6}}>
                <Text style={{fontWeight: "bold", fontSize: 15}}>{` ${pix.chave}`}</Text>
                <Text style={{fontWeight: "bold", fontSize: 15, color: "#367F04"}}>{`+ R$ ${pix.valor}`}</Text>

                </View>
                <Text style={{fontWeight: "bold", fontSize: 14, color: "#6f6f6f"}}>{`${formatarHorario(pix.horario)}`}</Text>
                
                {pix.devolucoes ? (
                  pix.devolucoes.map((devolucao, devIndex) => (
                    <View key={devIndex}>
                      <Text style={{fontWeight: "bold", fontSize: 14, color: "#367F04"}}>{`${devolucao.status}`}</Text>
                      {/* Acessar outras informações da devolução, se necessário */}
                    </View>
                  ))
                ) : (
                  <Text style={{fontWeight: "bold", fontSize: 14, color: "#D9721E"}}>Sem devolução</Text>
                )}
              </Pressable>
          </Card>
            ))}
        
        {pixs.map((pix, index) => (
          <Modal
          isOpen={selectedPixIndex === index}
          onClose={() => setSelectedPixIndex(null)}
          finalFocusRef={ref}
          key={index}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader>
                <Heading size="lg">Informações Adicionais</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody key={index}>
              {pix.devolucoes ? (
                  pix.devolucoes.map((devolucao, devIndex) => (
                    <View key={devIndex}>
                      <Text style={{fontWeight: "bold", fontSize: 14, color: "#151515"}}>Status da Devolução: <Text style={{fontWeight: "bold", fontSize: 13, color: "#367F04"}}>{` ${devolucao.status}`}</Text> </Text>

                      <Text style={{fontWeight: "bold", fontSize: 14, color: "#151515"}}>Valor Devolvido:
                        <Text style={{fontWeight: "bold", fontSize: 13, color: "#D9721E"}}> {`R$ ${devolucao.valor}`}</Text> </Text>

                      <Text style={{fontWeight: "bold", fontSize: 14, color: "#151515"}}>Hora da Solicitação: <Text style={{fontWeight: "bold", fontSize: 13, color: "#D9721E"}}> {` ${formatarHorario(devolucao.horario.solicitacao)}`} </Text> </Text>

                      <Text style={{fontWeight: "bold", fontSize: 14, color: "#151515"}}> Hora da Liquidação: <Text style={{fontWeight: "bold", fontSize: 13, color: "#D9721E"}}> {` ${formatarHorario(devolucao.horario.liquidacao)}`} </Text></Text>
                      
                    </View>
                  ))
                ) : (
                  <Text style={{fontWeight: "bold", fontSize: 14, color: "#6f6f6f"}}>O pix recebido não foi devolvido ao pagador</Text>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  action="positive"
                  borderWidth="$0"
                  onPress={() => {
                    setSelectedPixIndex(false)
                  }}
                >
                  <ButtonText>OK</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
