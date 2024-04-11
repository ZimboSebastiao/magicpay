import {
  Avatar,
  AvatarFallbackText,
  VStack,
  HStack,
  AvatarBadge,
  Heading,
  Text,
  GluestackUIProvider,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StyleSheet, View } from "react-native";
import { auth } from "../../firebase.config";

export default function UsuarioAvatar() {
  const { email, displayName: nome } = auth.currentUser;

  return (
    <GluestackUIProvider config={config}>
      <View style={estilos.container}>
        <VStack space="2xl">
          <HStack space="md">
            <Avatar bgColor="$indigo600">
              <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
              <AvatarBadge $dark-borderColor="$black" />
            </Avatar>
            <VStack>
              <Heading size="sm">{nome || "Visitante"}</Heading>
              <Text size="sm">Comerciante</Text>
            </VStack>
          </HStack>
        </VStack>
      </View>
    </GluestackUIProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 70,
  },
});
