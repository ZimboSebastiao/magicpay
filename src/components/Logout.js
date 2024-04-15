import { useEffect } from "react";

import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";

function Logout({ navigation }) {
  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(auth);
        navigation.navigate("Inicial");
      } catch (error) {
        console.error(error);
      }
    };

    logout();
  }, []);

  return null;
}

export default Logout;
