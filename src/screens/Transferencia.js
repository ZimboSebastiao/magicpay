import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Transferencia() {
  const [valor, setValor] = useState("");
  const [mostrarBotaoGerar, setMostrarBotaoGerar] = useState(false);

  const adicionarNumero = (numero) => {
    let novoValor = valor.replace("R$ ", "").replace(".", "").replace(",", "");

    // Adiciona zero e vírgula caso o valor seja vazio ou apenas "R$ "
    if (novoValor === "") {
      novoValor = "00,";
    } else {
      // Se já tem uma vírgula, adiciona o próximo número depois da vírgula
      if (novoValor.includes(",")) {
        const [inteiro, decimal] = novoValor.split(",");
        if (decimal.length < 2) {
          novoValor = inteiro + "," + decimal + numero;
        }
      } else {
        // Adiciona o número antes da vírgula
        novoValor = novoValor.slice(0, -1) + "," + novoValor.slice(-1) + numero;
      }
    }

    // Formata para exibição
    const numeroFormatado =
      "R$ " +
      parseFloat(novoValor.replace(",", ".")).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    setValor(numeroFormatado);

    // Mostra o botão após adicionar um número
    setMostrarBotaoGerar(true);
  };

  const apagarUltimoNumero = () => {
    if (valor.length === 3) {
      setValor("");
    } else {
      setValor(valor.slice(0, -1));
    }
  };

  const renderizarNumeros = () => {
    const numeros = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, "Apagar"],
    ];

    return numeros.map((linha, index) => (
      <View key={index} style={estilos.linhaNumeros}>
        {linha.map((numero) => (
          <TouchableOpacity
            key={numero}
            style={
              numero === "Apagar" ? estilos.botaoApagar : estilos.botaoNumero
            }
            onPress={() =>
              numero === "Apagar"
                ? apagarUltimoNumero()
                : adicionarNumero(String(numero))
            }
            activeOpacity={0.7} // Define a opacidade ao clicar no botão
          >
            <Text
              style={
                numero === "Apagar"
                  ? estilos.botaoApagarTexto
                  : estilos.botaoNumeroTexto
              }
            >
              {numero === "Apagar" ? (
                <FontAwesome6 name="delete-left" size={18} color="white" />
              ) : (
                numero
              )}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.entrada}
        placeholder="Valor a transferir"
        value={valor}
        keyboardType="numeric"
        onChangeText={(texto) => setValor(texto)}
      />
      {renderizarNumeros()}
      {mostrarBotaoGerar && (
        <TouchableOpacity
          onPress={() => console.log("Transferência realizada!")}
          style={estilos.botaoGerar}
        >
          <Text style={{ color: "#FFF" }}>Gerar Qr Code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const estilos = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Cor de fundo escura

  },
  entrada: {
    height: 60,
    paddingHorizontal: 50,
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#fff", // Cor de fundo

    borderRadius: 10, // Borda arredondada
    marginBottom: 20, // Espaçamento inferior
    elevation: 3, // Sombra para levantar o campo
  },
  linhaNumeros: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Espaçamento inferior
  },
  botaoNumero: {
    borderWidth: 0, // Sem borda

    margin: 10, // Espaçamento entre os botões
    borderRadius: 10, // Borda arredondada para botões
    width: 60, // Tamanho fixo para botões
    height: 60, // Tamanho fixo para botões
    backgroundColor: "#FF7E3F", // Cor de fundo
    elevation: 3, // Sombra para levantar o botão
    justifyContent: "center",
    alignItems: "center",
  },
  botaoNumeroTexto: {
    fontSize: 18,
    color: "#fff", // Cor do texto
    fontFamily: "Roboto", // Fonte do texto
    textAlign: "center", // Alinhamento no centro
  },
  botaoApagar: {
    borderWidth: 0, // Sem borda
    padding: 20,
    margin: 10, // Espaçamento entre os botões
    borderRadius: 10, // Borda arredondada para botões
    width: 60, // Tamanho fixo para botões
    height: 60, // Tamanho fixo para botões
    backgroundColor: "#FF7E3F", // Cor de fundo
    elevation: 3, // Sombra para levantar o botão
    justifyContent: "center",
    alignItems: "center",
  },
  botaoApagarTexto: {
    fontSize: 24,
    color: "#fff", // Cor do texto branca
    fontFamily: "Roboto", // Fonte do texto
    textAlign: "center", // Alinhamento no centro
  },
  botaoGerar: {
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: "#fe7251", // Cor de fundo
    borderRadius: 10, // Borda arredondada
    elevation: 3, // Sombra para levantar o botão
  },
  botaoGerarTexto: {
    fontSize: 18,
    color: "#fff", // Cor do texto
    fontFamily: "Roboto", // Fonte do texto
  },
};
