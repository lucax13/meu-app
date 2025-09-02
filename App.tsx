import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello world! estou no react native 👺</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e68200",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    fontSize: 20,
  },
});
