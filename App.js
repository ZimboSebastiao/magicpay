// ./App.js
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Cadastro from "./src/screens/Cadastro";
import Login from "./src/screens/Login";
import { QrCode, Wallet, UserCog } from 'lucide-react-native';
import Transferencia from "./src/screens/Transferencia";
import PagamentoQR from "./src/screens/PagamentoQR";
import Gestao from "./src/screens/Gestao";

import { Icon, SettingsIcon, RepeatIcon } from "@gluestack-ui/themed";
import Home from "./src/screens/Home";
import Configuracoes from "./src/screens/Configuracoes";
import Splash from "./src/screens/Splash";
import Historico from "./src/screens/Historico";
import Suporte from "./src/screens/Suporte";
import Idiomas from "./src/screens/Idiomas";
import MinhaConta from "./src/screens/MinhaConta";

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
          <Stack.Screen
            name="Home"
            component={Home}
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
            // tabBarBadge: 3,
            tabBarStyle: {
              backgroundColor: "#FFFFFF",
              height: 65,
            },
            tabBarActiveBackgroundColor: "#f0f4f8",
            tabBarActiveTintColor: "#538dfd",
            tabBarInactiveTintColor: "#151515",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold"
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size }) => (
                <FontAwesome name="home" size={27} color="#6f6f6f" />
              ),
            }}
          />

          <Tab.Screen
            name="Carteira"
            component={Historico}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Wallet size={27} color="#6f6f6f" />
              ),
            }}
          />

          <Tab.Screen
            name="Pix"
            component={PagamentoQR}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <QrCode size={27} color="#6f6f6f" />
              ),
            }}
          />

          {/* <Tab.Screen
            name="Gestão"
            component={Gestao}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon as={RepeatIcon} m="2" w="$19" h="$20" color="gray" />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Perfil"
            component={Configuracoes}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <UserCog size={27} color="#6f6f6f" />
              ),
            }}
          />

          <Tab.Screen
            name="Suporte"
            component={Suporte}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
          <Tab.Screen
            name="Idiomas"
            component={Idiomas}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
          <Tab.Screen
            name="MinhaConta"
            component={MinhaConta}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
