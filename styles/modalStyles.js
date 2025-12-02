
import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff", // Fondo blanco
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center", // Centra el contenido
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    marginBottom: 10,
  },
  cancel: {
    width: "100%",
  },
});
