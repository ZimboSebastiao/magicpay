import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Icon, SettingsIcon, RepeatIcon } from "@gluestack-ui/themed";

import Cadastro from "./src/screens/Cadastro";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Transferencia from "./src/screens/Transferencia";
import Configuracoes from "./src/screens/Configuracoes";
import Splash from "./src/screens/Splash";
import Historico from "./src/screens/Historico";
import Transacao from "./src/screens/Transacao";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });

    setTimeout(() => {
      setShowSplash(false);
    }, 4300);
    return unsubscribe;
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  if (!isUserLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar barStyle="black-content" />

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={isUserLoggedIn ? "Home" : "Login"}
          screenOptions={{
            tabBarStyle: {
              display: "flex", // Manter o mesmo comportamento de exibição
              backgroundColor: "rgba(0, 0, 0, 0.9)", // Cor de fundo do TabBar
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginVertical: 10,
              margin: 4,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size }) => (
                <FontAwesome name="home" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Transferencia"
            component={Transferencia}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <FontAwesome name="money" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Historico"
            component={Historico}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon as={RepeatIcon} m="2" w="$19" h="$20" color="gray" />
              ),
            }}
          />
          <Tab.Screen
            name="Transação"
            component={Transacao}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon as={RepeatIcon} m="2" w="$19" h="$20" color="gray" />
              ),
            }}
          />
          <Tab.Screen
            name="Configuracoes"
            component={Configuracoes}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon as={SettingsIcon} m="2" w="$19" h="$20" color="gray" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
