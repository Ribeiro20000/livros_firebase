import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1BdpgEsNynmLLHv5L9zbLccEuPsSJIdw",
  authDomain: "aula15-08.firebaseapp.com",
  projectId: "aula15-08",
  storageBucket: "aula15-08.appspot.com",
  messagingSenderId: "539684480868",
  appId: "1:539684480868:web:394cb69597835c2c383c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);