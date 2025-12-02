
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Auth from "./screens/Auth";
import Home from "./screens/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function App() {
  // ✅ Estado para saber si hay un usuario autenticado
  const [user, setUser] = useState(null);

  // ✅ Detecta cambios en la sesión del usuario (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Si hay usuario, lo guarda en el estado
    });
    return unsubscribe; // Limpia el listener cuando el componente se desmonta
  }, []);

  return (
    // ✅ PaperProvider: provee estilos y componentes de react-native-paper
    <PaperProvider>
      <View style={styles.container}>
        {/* ✅ Si hay usuario autenticado, muestra Home; si no, muestra Auth */}
        {user ? <Home user={user} /> : <Auth />}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Centra contenido verticalmente
  },
});
