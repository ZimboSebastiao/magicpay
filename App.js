import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Importa métodos de autenticação do Firebase
import { useState, useEffect } from "react"; // Importa hooks do React
import Icon from "react-native-vector-icons/MaterialIcons"; // Importa o ícone de logout

import Cadastro from "./src/screens/Cadastro"; // Importa o componente Cadastro
import Login from "./src/screens/Login"; // Importa o componente Login
import HomeScreen from "./src/screens/HomeScreen"; // Importa o componente HomeScreen
import Transferencia from "./src/screens/Transferencia"; // Importa o componente Transferencia
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// Importa dependências e componentes necessários

export default function App() {
  // Estado para rastrear o status de login do usuário
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  // Efeito para verificar o status de login do usuário ao montar o componente
  useEffect(() => {
    const auth = getAuth(); // Obtém a instância de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user); // Define isUserLoggedIn com base no estado de autenticação do usuário
    });

    return unsubscribe; // Limpa a inscrição quando o componente for desmontado
  }, []);

  // Retorna o componente do aplicativo
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={isUserLoggedIn ? "Home" : "Login"} // Define a rota inicial com base no status de login do usuário
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "rgba(69, 69, 69, 0.9)", // Cor de fundo da barra de navegação inferior
              // borderTopWidth: 0, // Remove a linha superior da barra de navegação
            },
            // tabBarItemStyle: {
            //   // paddingVertical: 10, // Espaçamento vertical dos botões
            // },
            // tabBarActiveTintColor: "white", // Cor do ícone e do rótulo da guia ativa
            // tabBarInactiveTintColor: "gray", // Cor do ícone e do rótulo da guia inativa
          }}
        >
          {/* Navegação condicional com base no login do usuário */}
          {isUserLoggedIn ? (
            <>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,

                  tabBarIcon: ({ focused, size }) => (
                    <FontAwesome name="home" size={24} color="grey" />
                  ),
                }}
              />
              {/* Define a tela Home se o usuário estiver logado */}
              <Tab.Screen
                name="Transferencia"
                component={Transferencia}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <FontAwesome name="money" size={24} color="grey" />
                  ),
                }}
              />

              {/* Adiciona a tela de Transferencia ao menu lateral */}
            </>
          ) : (
            <>
              <Tab.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} // Esconde o cabeçalho na tela de login
              />
              <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }} // Esconde o cabeçalho na tela de cadastro
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
