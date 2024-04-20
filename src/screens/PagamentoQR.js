import React, { useState } from 'react';
import { View, Alert, Image, Text, TextInput } from 'react-native';
import { Input, InputField, GluestackUIProvider, ButtonText, Button, Modal, ModalBackdrop, Heading, CloseIcon, Icon, ModalCloseButton, ModalHeader, ModalFooter, ModalContent, ModalBody, Center } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import axios from 'axios';


const PagamentoQR = () => {
  const [valor, setValor] = useState('');
  const [chave, setChave] = useState('');
  const [infoAdicionais, setInfoAdicionais] = useState('');
  const [imageQrCode, setImageQrCode] = useState(null);

  const generatePixCharge = async () => {
    try {
      const payload = {
        calendario: {
          expiracao: 3600,
        },
        valor: {
          original: valor,
        },
        chave,
        infoAdicionais: [
          {
            nome: 'Produto/Serviço',
            valor: infoAdicionais,
          },
        ],
      };

      const response = await axios.post('https://api-pix-j9w9.onrender.com/create-charge', payload);
      const pixId = response.data.loc.id;
      const qrCodeResponse = await axios.get(`https://api-pix-j9w9.onrender.com/get-qrcode/${pixId}`);
      setImageQrCode(qrCodeResponse.data.imagemQrcode);
    } catch (error) {
      Alert.alert('Erro ao gerar cobrança Pix', error.message);
    }
  };



  return (

    <View style={estilos.container}>
      <Text style={estilos.titulo}> Criar QR CODE </Text>

        <View style={{justifyContent: "center", alignItems: "center"}}>
        {imageQrCode && <Image source={{ uri: imageQrCode }} style={{ width: 200, height: 200 }} />}
        </View>

      <View style={estilos.viewInputs}>

        <View style={estilos.viewInput}>
          <Text style={estilos.viewTexto}>Chave Pix</Text>
          <TextInput
            style={estilos.campoInput}
            placeholder="Sua chave pix"
            placeholderTextColor="#151515"
            onChangeText={setChave}
          />
           
        </View>

        <View style={estilos.viewInput}>
          <Text style={estilos.viewTexto}>Qual o valor a receber?</Text>
          <TextInput
            style={estilos.campoInput}
            placeholder="R$ 0,00"
            placeholderTextColor="#151515"
            keyboardType="numeric"
            onChangeText={setValor}
          />
          
        </View>

        <View style={estilos.viewInput}>
          <Text style={estilos.viewTexto}>Produto</Text>
          <TextInput
            style={estilos.campoInput}
            placeholder="ex: Refrigerante"
            placeholderTextColor="#151515"
            onChangeText={setInfoAdicionais}
          />
        </View>

      <View style={estilos.botao}>

      <Button  onPress={generatePixCharge}>
      <ButtonText>Gerar QRcode </ButtonText>
      </Button>
      </View>
      </View>
    

    </View>


  );
};


const estilos = {
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    color: "#151515",
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 30,
    marginHorizontal: 20
  },
  viewInputs: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  textoInput: {
    color: "#151515",

    
  },
  campoInput: {
    borderBottomWidth: 1, 
    borderBottomColor: "#151515", 
    marginBottom: 10, 
    color: "#151515",
    fontSize: 16,
    fontStyle: "italic"
  }, 
  botao: {
    marginVertical: 100
  },
   viewInput: {
    marginBottom: 40
   },
   viewTexto: {
    marginBottom: 8,
    color: "#151515",
    fontSize: 20,
    fontWeight: "bold"

   }
};


export default PagamentoQR;
