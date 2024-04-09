import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Transferencia() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Transferência
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Valor a transferir"
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Conta de destino"
        keyboardType="default"
      />
      <Button
        onPress={() => console.log("Transferência realizada!")}
        title="Transferir"
        color="#841584"
      />
    </View>
  );
}
