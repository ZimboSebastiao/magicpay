// Logout.js
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";

export const logout = async () => {
  try {
    await signOut(auth);
    // Você pode redirecionar o usuário para onde quiser aqui
  } catch (error) {
    console.error(error);
  }
};

const Logout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigation.navigate("Login"); // Redireciona para a tela de login após o logout
    };

    performLogout();
  }, []);

  return null;
};

export default Logout;
