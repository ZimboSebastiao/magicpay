import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

const Idiomas = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { id: "en", name: "English" },
    { id: "pt", name: "Português" },
    { id: "es", name: "Español" },
    { id: "fr", name: "Français" },
    { id: "de", name: "Deutsch" },
    // Adicione mais idiomas conforme necessário
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    i18n.changeLanguage(language.id); // Mude o idioma selecionado
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageSpheres}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.id}
            style={[
              styles.languageSphere,
              {
                backgroundColor:
                  selectedLanguage === language.name ? "#FF7E3F" : "#FFFFFF",
              },
            ]}
            onPress={() => handleLanguageSelect(language)}
          >
            <Text style={styles.languageSphereText}>{language.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  languageSpheres: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  languageSphere: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  languageSphereText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Idiomas;
