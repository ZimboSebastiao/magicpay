import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

import {

  Icon,
  SettingsIcon
} from "@gluestack-ui/themed";

import Cadastro from "./src/screens/Cadastro";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home"
import Transferencia from "./src/screens/Transferencia";
import Configuracoes from  "./src/screens/Configuracoes";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  if (!isUserLoggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar barStyle="black-content" />
      <NavigationContainer  >
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "rgba(49, 49, 49, 0.9)",
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
