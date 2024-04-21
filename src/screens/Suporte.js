import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { Mail } from 'lucide-react-native';
import {Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionIcon, MinusIcon, PlusIcon, AccordionTitleText, AccordionContent, AccordionContentText, GluestackUIProvider} from "@gluestack-ui/themed";
import imagemSuporte from "../../assets/images/servicos-de-suporte.png";
import { config } from "@gluestack-ui/config";
export default function Suporte({ navigation }) {

  return (
    <GluestackUIProvider >
    <ScrollView style={estilos.container}>
     <Text style={estilos.titulo}>Central de Ajuda</Text>

     <View style={estilos.imagem}>
      <Image  source={imagemSuporte} />
     <Text style={estilos.tituloImagem}>Como podemos te Ajudar?</Text>
     </View>

     <View style={estilos.botoes}>

        <Pressable style={estilos.botao}>
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
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

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-2" mt="$5" borderRadius="$lg">
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-3" mt="$5" borderRadius="$lg">
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-4" mt="$5" borderRadius="$lg">
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-5" mt="$5" borderRadius="$lg">
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem style={{backgroundColor: "#ffffff", elevation: 3,}} value="item-6" mt="$5" borderRadius="$lg">
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
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                  </>
                )
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
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
    color: "#538dfd",
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
    borderRadius: 8
  },
  textoBotao: {
    fontSize: 16,
    marginLeft: 10,
  },
});
