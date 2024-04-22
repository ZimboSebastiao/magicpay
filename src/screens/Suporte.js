import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from "react-native";
import { Mail, Plus, Minus } from 'lucide-react-native';
import {Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionIcon, MinusIcon, PlusIcon, AccordionTitleText, AccordionContent, AccordionContentText, GluestackUIProvider} from "@gluestack-ui/themed";
import imagemSuporte from "../../assets/images/servicos-de-suporte.png";
import { config } from "@gluestack-ui/config";
export default function Suporte({ navigation }) {

  const enviarEmail = () => {
    // Endereço de e-mail para onde você deseja enviar o e-mail
    const destinatario = 'exemplo@email.com';
  
    // Formato do link para abrir o aplicativo de e-mail com o destinatário pré-definido
    const url = `mailto:${destinatario}`;
  
    // Abrir o aplicativo de e-mail
    Linking.openURL(url)
      .then(() => console.log('Aplicativo de e-mail aberto com sucesso'))
      .catch((err) => console.error('Erro ao abrir o aplicativo de e-mail:', err));
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
  },
  textoBotao: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold"
  },
});
