import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { auth } from "../../firebase.config";

import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Box,
  VStack,
  Badge,
  BadgeText,
  Button,
  ButtonText,
  GluestackUIProvider,
  Icon,
  BellIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const HomeScreen = () => {
  const { email, displayName: nome } = auth.currentUser;
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={styles.usuarioAvatar}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>{nome || "Visitante"}</AvatarFallbackText>
          </Avatar>

          <View>
            <Text style={styles.textoHeader}>Balança Total</Text>
            <Text style={styles.textoValor}>
              R$0 000,00 - <Text style={styles.textoPorcetagem}>0,0 (0%)</Text>{" "}
            </Text>
          </View>

          <Box alignItems="center">
            <VStack>
              <Badge
                h={22}
                w={22}
                bg="$red600"
                borderRadius="$full"
                mb={-14}
                mr={-14}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
              >
                <BadgeText color="$white">2</BadgeText>
              </Badge>
              <Button style={styles.notificacao}>
                <ButtonText>
                  {" "}
                  <Icon as={BellIcon} m="$2" w="$5" h="$5" />
                </ButtonText>
              </Button>
            </VStack>
          </Box>
        </View>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  usuarioAvatar: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    margin: 8,
  },
  notificacao: {
    backgroundColor: "#7C807C",
    borderRadius: 100,
  },
  textoHeader: {
    color: "#7C807C",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  textoValor: {
    color: "white",
    fontWeight: "bold",
  },
  textoPorcetagem: {
    color: "green",
    fontWeight: "bold",
  },
});

export default HomeScreen;
