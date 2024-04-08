import { initializeApp } from "firebase/app";

// Importando recursos da biblioteca de Autenticação
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5zOQ1Zk68cO0QFOUMMNI1um965aroS4A",
  authDomain: "magicpay-4709e.firebaseapp.com",
  projectId: "magicpay-4709e",
  storageBucket: "magicpay-4709e.appspot.com",
  messagingSenderId: "445457979693",
  appId: "1:445457979693:web:18b1be75f7b0ff77d41ba4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
