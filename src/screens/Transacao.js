import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function Transacao() {
  // Dados fictícios para o gráfico
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        data: [80, 45, 28, 80, 99, 29],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Transações</Text>

      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          width={350} // Largura do gráfico
          height={200} // Altura do gráfico
          yAxisLabel="R$" // Rótulo do eixo Y
          chartConfig={{
            backgroundColor: "#4689E8",
            backgroundGradientFrom: "#4689E8",
            backgroundGradientTo: "#4689E8",
            decimalPlaces: 2, // Número de casas decimais
            color: (opacity = 0.1) => `rgba(0, 255, 0, ${opacity})`, // Cor das barras
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor dos rótulos
            style: {
              borderRadius: 26,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#F5EB33",
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17191F",
  },
  titulo: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    paddingTop: 20,
  },
  chartContainer: {
    flex: 1,
    marginVertical: 50,
    alignItems: "center",
  },
});
