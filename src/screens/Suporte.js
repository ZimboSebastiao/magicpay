import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from "react-native";
import { Mail, Plus, Minus, Phone } from 'lucide-react-native';
import {Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionIcon, MinusIcon, PlusIcon, AccordionTitleText, AccordionContent, AccordionContentText, GluestackUIProvider} from "@gluestack-ui/themed";
import imagemSuporte from "../../assets/images/servicos-de-suporte.png";
import { config } from "@gluestack-ui/config";
export default function Suporte({ navigation }) {

  const enviarEmail = () => {
    const destinatario = 'suporte.pixwallet@gmail.com';
    const url = `mailto:${destinatario}`;
    Linking.openURL(url)
      .then(() => console.log('Aplicativo de e-mail aberto com sucesso'))
      .catch((err) => console.error('Erro ao abrir o aplicativo de e-mail:', err));
  };


  const fazerChamada = () => {
   
    const numeroTelefone = '+5511973604933';
    const url = `tel:${numeroTelefone}`;
  
    Linking.openURL(url)
      .then(() => console.log('Aplicativo de chamada aberto com sucesso'))
      .catch((err) => console.error('Erro ao abrir o aplicativo de chamada:', err));
  };


  return (
    <GluestackUIProvider config={config}>
    <ScrollView style={estilos.container}>
     <Text style={estilos.titulo}>Central de Ajuda</Text>

     <View style={estilos.imagem}>
      <Image  source={imagemSuporte} />
     <Text style={estilos.tituloImagem}>Como podemos te Ajudar?</Text>
     </View>

     <View style={estilos.botoes}>

        <Pressable style={estilos.botao} onPress={enviarEmail}>
          <Mail color="#538dfd" />
          <Text style={estilos.textoBotao}>Envia-nos um E-mail</Text>
        </Pressable>

        <Pressable style={estilos.botaoCelular} onPress={fazerChamada}>
          <Phone color="#538dfd" />
          <Text style={estilos.textoBotao}>Entre em contato</Text>
        </Pressable>


        <Accordion style={{backgroundColor: "#f0f4f8"}} m="$5" width="90%" maxWidth={640} shadowColor="transparent">

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-1" borderRadius="$lg">
          <AccordionHeader>
            <AccordionTrigger
           
              sx={{
                ":focusVisible": {
                  borderRadius: "$lg",
                },
              }}
            >
              {({ isExpanded }) => {
                return (
                  <>
                    {isExpanded ? (
                      <Minus color="#538dfd"   />
                    ) : (
                      <Plus color="#538dfd"  />
                    )}
                    <AccordionTitleText  style={{ paddingLeft: 12}}>
                      How do I place an order?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              To place an order, simply select the products you want, proceed to
              checkout, provide shipping and payment information, and finalize
              your purchase.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

       

        </Accordion>

     </View>
    </ScrollView>
    </GluestackUIProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 50,
  },
  imagem: {
    justifyContent: "center",
    alignItems: "center",
  },
  tituloImagem: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 25,
    marginBottom: 30,
    color: "#151515",
  },
  botoes: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  botao: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    elevation: 3,
    borderColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    paddingLeft: 20,
    marginBottom: 20
  },
  botaoCelular: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    elevation: 3,
    borderColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    paddingLeft: 20,
  },
  textoBotao: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold"
  },
});
