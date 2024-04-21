// "./src/screens/Home.js"
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase.config";
import { ScanBarcode, Bell, Search, CircleDollarSign, HandCoins, SquareSplitHorizontal, ScanSearch, ScanText, RefreshCcwDot, Barcode, Banknote } from 'lucide-react-native';
import { Input, InputSlot, InputField, HStack, Spinner } from "@gluestack-ui/themed";

import {
  Avatar,
  AvatarFallbackText,
  GluestackUIProvider,
  Icon,
  Card,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const Home = () => {
  // Acessando dados do usuário logado
  // console.log(auth.currentUser);
  const navigation = useNavigation();
  const { email, displayName: nome } = auth.currentUser;
  const [pixs, setPixs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatarHorario = (horario) => {
    return format(new Date(horario), "MMMM dd, yyyy hh:mm");
  };

  useEffect(() => {
    async function fetchPixs() {
        try {
            const response = await axios.get('https://api-pix-j9w9.onrender.com/pixListCobv');
            // console.log('Resposta da API Pix:', response.data.cobs);
            // Acessando informações do calendário para cada cobrança
            response.data.cobs.forEach(cob => {
                // const criacao = cob.calendario.criacao;
                // const expiracao = cob.calendario.expiracao;
                const txid = cob.txid;
                const revisao = cob.revisao;
                const status = cob.status;
                const valorOriginal = cob.valor.original;
                const chave = cob.chave;
                // const devedorNome = cob.devedor.nome;
                const infoAdicionais = cob.infoAdicionais;
                const locationId = cob.loc.id;
                const locationUrl = cob.loc.location;
                const tipoCob = cob.loc.tipoCob;
                const locCriacao = cob.loc.criacao;
                const pixCopiaECola = cob.pixCopiaECola;
            });

            setPixs(response.data.cobs);
            setIsLoading(false);
         
        } catch (error) {
            console.error('Erro ao buscar Pixs:', error.message);
        }
    }
    fetchPixs();
  }, []);


  return (
    <GluestackUIProvider config={config}>
      <ScrollView style={styles.container}>

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
              <Text size="md">Carregando..</Text>
          </HStack>
            </View>
           )}

        {/* CABEÇALHO - AVATAR - NOTIFICAÇÃOS*/}
        <View style={styles.usuarioAvatar}>
          <Avatar bgColor="$indigo600" size="md" borderRadius="$full">
            <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
          </Avatar>

            <Text style={{color: "#151515", fontWeight: "bold", fontSize: 16}}>Olá, Bem-Vindo(a) de Volta!</Text>
            

          <Pressable onPress={() => {navigation.navigate("Pix")}}>           
            <ScanBarcode color="#538dfd" />          
          </Pressable>

          <Pressable >
            <Bell m="$2" w="$5" h="$5" color="#538dfd" />
          </Pressable>
        </View>

         {/* INPUT DE PESQUISA */}
        <View style={styles.pesquisa}>
        <Input style={styles.pesquisaInput}  variant="rounded"  size="lg">
          <InputSlot pl="$3">
          <Search color="#6f6f6f" m="$2" w="$3" h="$3" />
          </InputSlot>
          <InputField style={styles.textoCampo} placeholder="Buscar por Nome ou Chave Pix" />
        </Input>
        </View>

         {/* CARD DE SALDO MONETÁRIO */}
        <View>
          <Card
            style={styles.cartao}
            p="$5"
            borderRadius="$lg"
            maxWidth={360}
            m="$3"
          >
            <Text style={styles.textoCartao}>Saldo monetário</Text>
            <Text style={styles.textoCartaoValor}> R$ 3.000,00</Text>

            <Select>
              <SelectTrigger style={styles.selecao} variant="rounded" size="sm">
                <SelectInput sx={{ color: "white" }} placeholder="Moeda" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper style={styles.selecaoConteudo}>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Real Brasil" value="R$" />
                  <SelectItem label="US dollar" value="$" />
                  <SelectItem label="Kwanza Angola" value="AOA" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </Card>
        </View>

         {/* CARD DE GESTÃO DE PIX */}
        <View>
          <Text style={{color: "#151515", fontWeight: "bold", fontSize: 17, marginTop: 40, padding: 2, margin: 7}}>Gestão de Pix</Text>
          <Card
            style={styles.cartaoTransacao}
            p="$2"
            maxWidth={360}
            m="$3"
          >
           
            <View style={styles.icones}>
              
              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <CircleDollarSign color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Status</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <HandCoins color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Recebidos</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <SquareSplitHorizontal color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Split</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <ScanSearch color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Consultar</Text>
              </Pressable>
              
            </View>
          </Card>
        </View>

         {/* CARD DE COBRANÇAS */}
        <View>
          <Text style={{color: "#151515", fontWeight: "bold", fontSize: 17, marginTop: 25, padding: 2, margin: 7}}>Cobranças</Text>
          <Card
            style={styles.cartaoTransacao}
            p="$2"
            maxWidth={360}
            m="$3"
          >
           
            <View style={styles.icones}>
              
              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <Barcode color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Boleto</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <Banknote color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Pagamento</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <ScanText color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Consultar</Text>
              </Pressable>

              <Pressable style={{justifyContent: "center", alignItems: "center"}}>
              <RefreshCcwDot color="#538dfd" size={25}/>
              <Text style={styles.textosCartao}>Status</Text>
              </Pressable>
              
            </View>
          </Card>
        </View>

        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 10 }}>
            <Text style={{ color: "#151515", fontWeight: "bold", fontSize: 18}}>Cobranças Recentes</Text>
          </View>

           {/* Seu código de renderização aqui */}
           {pixs.map((cob, index) => (
                <Card key={index} p="$4" maxWidth={360} m="$3">
                    <Pressable key={index} onPress={() => console.log(cob)}>
                        <View  style={{flexDirection: "row",justifyContent: "space-between"}}>

                        <View>
                            <Text style={{fontWeight: "bold", fontSize: 15, marginBottom: 10}}>{` ${cob.chave}`}</Text>
                            <Text style={{fontWeight: "bold", fontSize: 14, color: "#6f6f6f"}}>{` ${formatarHorario(cob.loc.criacao)}`}</Text>
                        </View>

                        <View>
                          <Text style={{fontWeight: "bold", fontSize: 15, color: "#367F04", marginBottom: 10}}>{`R$ ${cob.valor.original}`}</Text>
                          <Text style={{fontWeight: "bold", fontSize: 13, color: "#FF241E"}}>{`${cob.status}`}</Text>
                        </View>
                        </View>
                        {/* <Text style={{fontWeight: "bold", fontSize: 14, color: "#6f6f6f"}}>{`${formatarHorario(cob.status)}`} </Text> */}
                    </Pressable>
                </Card>
            ))}

      </ScrollView>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 8,
  },
  
  usuarioAvatar: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    
  },
  notificacao: {
    backgroundColor: "blue",
    borderRadius: 150,
    padding: 0,
    margin: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textoHeader: {
    color: "#7C807C",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  textoValor: {
    color: "white",
    fontWeight: "bold",
  },
  textoPorcetagem: {
    color: "green",
    fontWeight: "bold",
  },
  cartao: {
    backgroundColor: "#538dfd",
    marginTop: 16,
  },
  imagemCartao: {
    backgroundColor: "#9C9C9C",
    padding: 4,

    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textoCartao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#454545",
  },
  textoCartaoValor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f4f8",
    marginBottom: 20,
  },
  selecao: {
    backgroundColor: "#454545",
    borderColor: "#454545",
  },
  selecaoConteudo: {
    color: "white",
  },
  cartaoTransacao: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    elevation: 3,
  },
  textosCartao: {
    color: "#6f6f6f",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  icones: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  textoTransacao: {
    color: "white",
    fontWeight: "bold",
  },
  textoRecebido: {
    color: "#828282",
  },
  pesquisa: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
});

export default Home;
