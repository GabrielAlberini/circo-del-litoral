// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAAkvsSudMvFlpxT3uVdazt5XUzpt0qhfI",
  authDomain: "circo-del-litoral-db.firebaseapp.com",
  projectId: "circo-del-litoral-db",
  storageBucket: "circo-del-litoral-db.appspot.com",
  messagingSenderId: "459602718157",
  appId: "1:459602718157:web:143150865243b317c52884",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
