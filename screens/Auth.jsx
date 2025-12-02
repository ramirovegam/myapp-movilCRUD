
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import logo from "../assets/my-logo.png";
import { authStyles as styles } from "../styles/authStyles"; // ✅ Importa los estilos

export default function Auth() {
  // ✅ Estado para alternar entre formulario de login y registro
  const [showLogin, setShowLogin] = useState(true);

  // ✅ Cambia el formulario mostrado (login ↔ registro)
  const changeForm = () => setShowLogin(!showLogin);

  return (
    <View style={styles.container}>
      {/* ✅ Logo de la aplicación */}
      <Image source={logo} style={styles.logo} />

      {/* ✅ Render condicional: muestra LoginForm o RegisterForm */}
      {showLogin ? (
        <LoginForm changeForm={changeForm} />
      ) : (
        <RegisterForm changeForm={changeForm} />
      )}
    </View>
  );
}


