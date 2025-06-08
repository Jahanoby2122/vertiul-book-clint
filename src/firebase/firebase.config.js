
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx4mty8qkpGsY1I59A3PjcwomM_4iv4m4",
  authDomain: "virtual-bookshelf-9106f.firebaseapp.com",
  projectId: "virtual-bookshelf-9106f",
  storageBucket: "virtual-bookshelf-9106f.firebasestorage.app",
  messagingSenderId: "267050865516",
  appId: "1:267050865516:web:a5f7c748232d10801d1949"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);