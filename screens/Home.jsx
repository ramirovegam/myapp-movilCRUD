
import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import { ref, update, onValue } from "firebase/database";
import { homeStyles as styles } from "../styles/homeStyles";
import EditProfileModal from "../components/EditProfileModal";

export default function Home({ user }) {
  const [images, setImages] = useState([]);
  const [editVisible, setEditVisible] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [username, setUsername] = useState("");

  // ✅ Cargar datos del usuario desde Firebase
  useEffect(() => {
    const userRef = ref(db, "users/" + user.uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsername(data.username || "Mi Perfil");
        setImages(data.images || []);
      }
    });
  }, [user.uid]);

  // ✅ Simula agregar imagen con texto incremental
  const addFakeImage = async () => {
    const label = `Imagen ${images.length + 1}`;
    const updatedImages = [...images, { label }];
    await update(ref(db, "users/" + user.uid), { images: updatedImages });
    setImages(updatedImages);
  };

  // ✅ Actualiza el nombre en Firebase
  const updateUsername = async () => {
    await update(ref(db, "users/" + user.uid), { username: newUsername });
    setUsername(newUsername);
    setEditVisible(false);
  };

  // ✅ Cierra sesión real
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header estilo Instagram */}
      <View style={styles.header}>
        <View style={styles.profilePicPlaceholder} />
        <Text style={styles.username}>{username}</Text>

        {/* Botones principales */}
        <View style={styles.headerButtons}>
          <Button mode="contained" onPress={() => setEditVisible(true)} style={styles.button}>
            Edit Profile
          </Button>
          <Button mode="contained" onPress={addFakeImage} style={styles.button}>
            Share Pic
          </Button>
        </View>

        {/* Botón Cerrar Sesión */}
        <Button mode="outlined" onPress={logout} style={styles.logout}>
          Cerrar Sesión
        </Button>
      </View>

      {/* Cuadrícula de imágenes simuladas */}
      {images.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>No hay imágenes aún</Text>
      ) : (
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageContainer}>
              <View style={styles.fakeImage} />
              <Text style={styles.imageLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Footer estilo Instagram */}
      <View style={styles.footer}>
        <Feather name="home" size={28} color="#333" />
        <Feather name="search" size={28} color="#333" />
        <Feather name="plus-square" size={28} color="#333" />
        <Feather name="video" size={28} color="#333" />
        <Feather name="user" size={28} color="#333" />
      </View>

      {/* Modal para editar perfil */}
      <EditProfileModal
        visible={editVisible}
        onDismiss={() => setEditVisible(false)}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        onSave={updateUsername}
      />
    </View>
  );
}
