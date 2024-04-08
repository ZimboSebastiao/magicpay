import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

import Cadastro from "./src/screens/Cadastro";
import Login from "./src/screens/Login";

const Drawer = createDrawerNavigator();

export default function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });

    return unsubscribe; // Limpa a inscrição quando o componente for desmontado
  }, []);

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        {/* Exibe o avatar do usuário se estiver logado */}
        {isUserLoggedIn && <UsuarioAvatar />}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Login" // Alterado para "Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#1D1D1D" },
            headerTintColor: "white",
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          {/* Navegação condicional com base no login do usuário */}
          {isUserLoggedIn ? (
            <></>
          ) : (
            <>
              <Drawer.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Drawer.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
