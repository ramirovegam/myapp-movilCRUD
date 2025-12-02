
// ✅ Importamos los módulos necesarios de Firebase y AsyncStorage
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Configuración del proyecto Firebase (copiada del panel de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCCpKNSVbRancceXmTt5Qf8BPI-3axbfuU", // Clave API para autenticación
  authDomain: "myapp-704ed.firebaseapp.com",        // Dominio para autenticación
  databaseURL: "https://myapp-704ed-default-rtdb.firebaseio.com", // URL de la base de datos en tiempo real
  projectId: "myapp-704ed",                         // ID del proyecto
  storageBucket: "myapp-704ed.appspot.com",         // Bucket para almacenamiento de archivos
  messagingSenderId: "482283257530",                // ID para mensajes push
  appId: "1:482283257530:web:396423f3e11ae4c9da0c83", // ID único de la app
  measurementId: "G-PFV6BSYP1J"                     // ID para analíticas
};

// ✅ Evitar inicialización duplicada (si ya existe una instancia, la reutiliza)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Inicializamos la autenticación con persistencia usando AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// ✅ Inicializamos la base de datos en tiempo real
export const db = getDatabase(app);

// ✅ Inicializamos el almacenamiento para subir imágenes/archivos
export const storage = getStorage(app);
