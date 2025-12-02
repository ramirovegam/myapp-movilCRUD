
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centra el contenido verticalmente
    padding: 20,
    backgroundColor: "#f9f9f9", // Fondo claro
  },
  logo: {
    width: "100%", // Ocupa todo el ancho disponible
    height: 150,
    resizeMode: "contain", // Ajusta el logo sin deformarlo
    marginBottom: 30, // Espacio debajo del logo
  },
});
