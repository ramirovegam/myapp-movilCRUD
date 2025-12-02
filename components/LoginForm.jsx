
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginForm({ changeForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <TextInput label="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput label="Contraseña" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <Button mode="contained" onPress={handleLogin}>Iniciar Sesión</Button>
      <Button mode="text" onPress={changeForm}>Registrarse</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { marginBottom: 10 },
});
