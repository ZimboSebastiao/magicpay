import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BarChart, XAxis, LineChart, Grid } from "react-native-svg-charts";
import { scaleBand } from "d3-scale";

const Gestao = () => {
  const [dados, setDados] = useState({
    semanal: [
      { value: 50, label: "Seg" },
      { value: 10, label: "Ter" },
      { value: -20, label: "Qua" },
      { value: 30, label: "Qui" },
      { value: -10, label: "Sex" },
      { value: 5, label: "Sáb" },
      { value: 40, label: "Dom" },
    ],
    mensal: [
      { value: 1500, label: "Jan" },
      { value: 1600, label: "Fev" },
      { value: 1800, label: "Mar" },
      { value: 2000, label: "Abr" },
      { value: 2200, label: "Mai" },
      { value: 2300, label: "Jun" },
      { value: 2400, label: "Jul" },
      { value: 2500, label: "Ago" },
      { value: 2600, label: "Set" },
      { value: 2800, label: "Out" },
      { value: 3000, label: "Nov" },
      { value: 3200, label: "Dez" },
    ],
  });
  const [tipoGrafico, setTipoGrafico] = useState("semanal");

  const selecionarGrafico = (tipo) => {
    setTipoGrafico(tipo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Gráfico de {tipoGrafico.charAt(0).toUpperCase() + tipoGrafico.slice(1)}
      </Text>
      <BarChart
        style={styles.chart}
        data={dados[tipoGrafico].map((item) => item.value)}
        svg={{ fill: "#FF7E3F" }}
        contentInset={{ top: 20, bottom: 20 }}
        spacingInner={0.4}
        spacingOuter={0.2}
        gridMin={0}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={dados[tipoGrafico].map((_, index) => index)}
        scale={scaleBand}
        formatLabel={(_, index) => dados[tipoGrafico][index].label}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "white" }}
      />

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[
            styles.botao,
            tipoGrafico === "semanal" && styles.botaoSelecionado,
          ]}
          onPress={() => selecionarGrafico("semanal")}
        >
          <Text style={styles.botaoTexto}>Semanal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.botao,
            tipoGrafico === "mensal" && styles.botaoSelecionado,
          ]}
          onPress={() => selecionarGrafico("mensal")}
        >
          <Text style={styles.botaoTexto}>Mensal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  chart: {
    height: 200,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    color: "white",
  },
  botaoSelecionado: {
    backgroundColor: "#6495ED",
  },
  botaoTexto: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default Gestao;
