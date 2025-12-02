
import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebaseConfig";

export default function RegisterForm({ changeForm }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Correo no válido").required("Requerido"),
      username: Yup.string().required("Requerido"),
      password: Yup.string().required("Requerido"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
        .required("Requerido"),
    }),
    onSubmit: async (values) => {
      try {
        // Crear usuario en Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const userId = userCredential.user.uid;

        // ✅ Guardar datos en Realtime Database con estructura completa
        await set(ref(db, "users/" + userId), {
          username: values.username,
          email: values.email,
          images: [] // ✅ Inicializamos el array vacío
        });

        alert("Usuario registrado correctamente");
      } catch (error) {
        alert(error.message);
      }
    },
  });

  return (
    <View>
      <TextInput
        label="Email"
        style={styles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <TextInput
        label="Nombre de Usuario"
        style={styles.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <TextInput
        label="Repetir Contraseña"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
      />
      <Button mode="contained" onPress={formik.handleSubmit}>
        Registrarse
      </Button>
      <Button mode="text" onPress={changeForm}>
        Iniciar Sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
