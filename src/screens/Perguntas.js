import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from "react-native";
import {Plus, Minus } from 'lucide-react-native';
import {Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionIcon, MinusIcon, PlusIcon, AccordionTitleText, AccordionContent, AccordionContentText, GluestackUIProvider, ChevronDownIcon, ChevronUpIcon} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
export default function Perguntas({ navigation }) {



  return (
    <GluestackUIProvider config={config}>
    <ScrollView style={estilos.container}>
     <Text style={estilos.titulo}>FAQs</Text>

      <View style={estilos.imagem}>
       
      <Text style={estilos.tituloImagem}>Perguntas Frequentes</Text>
      </View>

      <View style={estilos.viewAjuda}>        
        <Text style={estilos.textoAjuda}>Explore as perguntas frequentes abaixo para encontrar as respostas que você procura. Esperamos que isso facilite sua jornada conosco!</Text>
      </View>

     <View style={estilos.botoes}>

     <Accordion
      width="100%"
      type="multiple"
      m="$5"
      borderWidth={1}
      shadowColor="transparent"
      borderColor="$borderLight300"
      $dark-borderColor="$borderDark700"
      style={{backgroundColor: "#f0f4f8"}}
      >
      <AccordionItem
        value="a"
        borderBottomWidth={1}
        sx={{
          borderBottomColor: "$borderLight300",
          _dark: {
            borderBottomColor: "$borderDark700",
          },
        }}
        >
        <AccordionHeader
        style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  O que é PixWallet?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
          O PixWallet é um aplicativo de pagamento digital desenvolvido pensando em pequenos comerciantes e empreendedores, com o objetivo de facilitar a gestão financeira. Além disso, o PixWallet permite aos usuários realizar transações financeiras eletronicamente, incluindo a geração de QR Code para cobranças via Pix. Essa plataforma simplifica uma ampla gama de atividades financeiras, desde simples transferências ponto a ponto até o pagamento de contas e muito mais.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="b"
        borderBottomWidth={1}
        borderBottomColor="$borderLight300"
        $dark-borderBottomColor="$borderDark700"
      >
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  Como o PixWallet ajuda os pequenos comerciantes e empreendedores?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Yes, you can disable the whole accordion by setting the isDisabled
            prop to true on the Accordion component.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="c">
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  Características e funcionalidades oferecidas pelo PixWallet?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Controlled components refer to the components where the state and
            behaviors are controlled by the Parent component. You can make the
            accordion a controlled component by passing the value prop to the
            Accordion component and setting the onValueChange prop to update the
            value prop. Refer to the controlled accordion example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem 
        value="d"  
        borderTopWidth={1}
        borderTopColor="$borderLight300"
        $dark-borderBottomColor="$borderDark700">
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  segurança para as transações financeiras
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Controlled components refer to the components where the state and
            behaviors are controlled by the Parent component. You can make the
            accordion a controlled component by passing the value prop to the
            Accordion component and setting the onValueChange prop to update the
            value prop. Refer to the controlled accordion example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem 
        value="e"  
        borderTopWidth={1}
        borderTopColor="$borderLight300"
        $dark-borderBottomColor="$borderDark700">
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  Qual é o processo para gerar um QR Code de cobrança via Pix usando o PixWallet?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Controlled components refer to the components where the state and
            behaviors are controlled by the Parent component. You can make the
            accordion a controlled component by passing the value prop to the
            Accordion component and setting the onValueChange prop to update the
            value prop. Refer to the controlled accordion example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem 
        value="f"  
        borderTopWidth={1}
        borderTopColor="$borderLight300"
        $dark-borderBottomColor="$borderDark700">
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  Existem taxas associadas ao uso do PixWallet?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Controlled components refer to the components where the state and
            behaviors are controlled by the Parent component. You can make the
            accordion a controlled component by passing the value prop to the
            Accordion component and setting the onValueChange prop to update the
            value prop. Refer to the controlled accordion example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem 
        value="g"  
        borderTopWidth={1}
        borderTopColor="$borderLight300"
        $dark-borderBottomColor="$borderDark700">
        <AccordionHeader
         style={{backgroundColor: "#f0f4f8"}}
          sx={{
            backgroundColor: "$backgroundLight0",
            _dark: {
              backgroundColor: "$backgroundDark950",
            },
          }}
        >
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                  O PixWallet é compatível com outras plataformas de pagamento digital ou funciona exclusivamente com o Pix?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          mt="$0"
          pt="$2"
          sx={{
            backgroundColor: "$backgroundLight50",
            _dark: {
              backgroundColor: "$backgroundDark900",
            },
          }}
        >
          <AccordionContentText>
            Controlled components refer to the components where the state and
            behaviors are controlled by the Parent component. You can make the
            accordion a controlled component by passing the value prop to the
            Accordion component and setting the onValueChange prop to update the
            value prop. Refer to the controlled accordion example in the docs.
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
    alignItems: "flex-start",
    paddingLeft: 20

  },
  tituloImagem: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#151515",
  },
  viewAjuda:{
    paddingTop: 0,
    marginTop: 0,
    margin: 20,
    padding: 10,
  },
  textoAjuda: {
    fontSize: 16,
    textAlign: "left"
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
  tituloHorario: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold"
  },
  textoHorario: {
    fontWeight: "normal",
    fontSize: 14
  },
});
