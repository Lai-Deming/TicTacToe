import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Page from "./pages/Page";

const styles = StyleSheet.create({
  container: {
    fontFamily: "sans-serif",
    margin: 50,
    padding: 0,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Page />
    </View>
  );
}
