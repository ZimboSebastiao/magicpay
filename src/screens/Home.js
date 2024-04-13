// "./src/screens/Home.js"

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import transacaoImage from "../../assets/images/transacao.png";
import { auth } from "../../firebase.config";
import Transacao from "./Transacao";
import {
  Avatar,
  AvatarFallbackText,
  Image,
  Box,
  VStack,
  Badge,
  BadgeText,
  Button,
  ButtonText,
  GluestackUIProvider,
  Icon,
  BellIcon,
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
    console.log(auth.currentUser);
    const navigation = useNavigation();

  const { email, displayName: nome } = auth.currentUser;
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        {/* CABEÇALHO - AVATAR - NOTIFICAÇÃOS*/}
        <View style={styles.usuarioAvatar}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
          </Avatar>

          <View>
            <Text style={styles.textoHeader}>Balanço Total</Text>
            <Text style={styles.textoValor}>
              R$0 000,00 - <Text style={styles.textoPorcetagem}>0,0 (0%)</Text>{" "}
            </Text>
          </View>

          <Box alignItems="center">
            <VStack>
              <Badge
                h={22}
                w={22}
                bg="$red600"
                borderRadius="$full"
                mb={-14}
                mr={-14}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
              >
                <BadgeText color="$white">2</BadgeText>
              </Badge>
              <Button style={styles.notificacao}>
                <ButtonText>
                  {" "}
                  <Icon as={BellIcon} m="$2" w="$5" h="$5" />
                </ButtonText>
              </Button>
            </VStack>
          </Box>
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
            <Text style={styles.textoCartaoValor}> R$0 000,00</Text>

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

        <View>
        <TouchableOpacity
            
            onPress={() => navigation.navigate("Transacao")} 
          >
          <Card
            style={styles.cartaoTransacao}
            p="$2"
            maxWidth={360}
            m="$3"
            borderRadius="$full"
          >
            <View style={styles.imagemCartao}>
              <Image
                mb="$0"
                h={40}
                width={40}
                source={transacaoImage}
                alt="Icon de transação"
              />
            </View>
            <View style={styles.textosCartao}>
              <Text style={styles.textoTransacao}>Transações</Text>
              <Text style={styles.textoRecebido}>
                {" "}
                R$0 000,00 recebido em abril
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        </View>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  usuarioAvatar: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    margin: 8,
  },
  notificacao: {
    backgroundColor: "#7C807C",
    borderRadius: 100,
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
    backgroundColor: "#FF7E3F",
    marginVertical: 40,
  },
  imagemCartao: {
    backgroundColor: "#9C9C9C",
    padding: 4,

    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textoCartao: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textoCartaoValor: {
    fontSize: 35,
  },
  selecao: {
    backgroundColor: "black",
    borderColor: "black",
  },
  selecaoConteudo: {
    color: "white",
  },
  cartaoTransacao: {
    backgroundColor: "#454545",
    flexDirection: "row",
  },
  textosCartao: {
    paddingLeft: 10,
  },
  textoTransacao: {
    color: "white",
    fontWeight: "bold",
  },
  textoRecebido: {
    color: "#828282",
  },
});

export default Home;
