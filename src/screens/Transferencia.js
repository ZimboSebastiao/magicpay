import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Transferencia() {
  const [valor, setValor] = useState("");

  const adicionarNumero = (numero) => {
    if (valor === "" && numero !== ".") {
      setValor("R$ " + numero);
    } else {
      setValor(valor + numero);
    }
  };

  const apagarUltimoNumero = () => {
    setValor(valor.slice(0, -1));
  };

  const renderizarNumeros = () => {
    const numeros = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [".", 0, "Apagar"],
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
          >
            <Text
              style={
                numero === "Apagar"
                  ? estilos.botaoApagarTexto
                  : estilos.botaoNumeroTexto
              }
            >
              {numero === "Apagar" ? (
                <FontAwesome6 name="delete-left" size={25} color="black" />
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
      <TouchableOpacity
        onPress={() => console.log("Transferência realizada!")}
        style={estilos.botaoGerar}
      >
        <Text>Gerar Qr Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  entrada: {
    height: 60,
    paddingHorizontal: 50,
    textAlign: "center",
    fontSize: 30,
  },
  linhaNumeros: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoNumero: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    margin: 15,
    borderRadius: 5,
  },
  botaoNumeroTexto: {
    fontSize: 24,
  },
  botaoGerar: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#B22222",
    borderRadius: 5,
  },
};
