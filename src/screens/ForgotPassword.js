import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Importa o método de redefinição de senha do Firebase

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    const auth = getAuth(); // Obtém a instância de autenticação
    sendPasswordResetEmail(auth, email) // Envia o e-mail de redefinição de senha
      .then(() => {
        Alert.alert(
          "E-mail enviado",
          "Verifique sua caixa de entrada para redefinir sua senha."
        );
      })
      .catch((error) => {
        Alert.alert("Erro ao enviar e-mail", error.message);
      });
  };

  return (
    <View>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Button
        title="Enviar e-mail de redefinição"
        onPress={handleResetPassword}
      />
    </View>
  );
};

export default ForgotPassword;
