import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem, // Importa o DrawerItem
} from "@react-navigation/drawer";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Importa métodos de autenticação do Firebase
import { useState, useEffect } from "react"; // Importa hooks do React
import Icon from "react-native-vector-icons/MaterialIcons"; // Importa o ícone de logout

import Cadastro from "./src/screens/Cadastro"; // Importa o componente Cadastro
import Login from "./src/screens/Login"; // Importa o componente Login
import HomeScreen from "./src/screens/HomeScreen"; // Importa o componente HomeScreen
import UsuarioAvatar from "./src/screens/UsuarioAvatar"; // Importa o componente UsuarioAvatar
import Logout from "./src/components/Logout";
import Transferencia from "./src/screens/Transferencia"; // Importa o componente Transferencia

const Drawer = createDrawerNavigator(); // Cria um DrawerNavigator

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

  // Componente personalizado de conteúdo do drawer
  function CustomDrawerContent(props) {
    const auth = getAuth(); // Obtém a instância de autenticação

    const handleLogout = async () => {
      try {
        await signOut(auth); // Faz logout do usuário
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      }
    };

    return (
      <DrawerContentScrollView {...props}>
        {/* Exibe o avatar do usuário se estiver logado */}
        {isUserLoggedIn && <UsuarioAvatar />}
        <DrawerItemList {...props} />
        {isUserLoggedIn && (
          <DrawerItem
            label="Sair"
            onPress={handleLogout}
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} /> // Ícone de logout
            )}
          />
        )}
      </DrawerContentScrollView>
    );
  }

  // Retorna o componente do aplicativo
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={isUserLoggedIn ? "Home" : "Login"} // Define a rota inicial com base no status de login do usuário
          screenOptions={{
            headerStyle: { backgroundColor: "#B22222" }, // Estilo do cabeçalho
            headerTintColor: "white", // Cor do texto do cabeçalho
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />} // Define o conteúdo do drawer
        >
          {/* Navegação condicional com base no login do usuário */}
          {isUserLoggedIn ? (
            <>
              <Drawer.Screen name="Home" component={HomeScreen} />
              {/* Define a tela Home se o usuário estiver logado */}
              <Drawer.Screen name="Transferencia" component={Transferencia} />
              {/* Adiciona a tela de Transferencia ao menu lateral */}
            </>
          ) : (
            <>
              <Drawer.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} // Esconde o cabeçalho na tela de login
              />
              <Drawer.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }} // Esconde o cabeçalho na tela de cadastro
              />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
