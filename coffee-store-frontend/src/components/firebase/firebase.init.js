// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAST-nGNdCW7o3Wukc-xHK7MSy08PMHJbQ",
  authDomain: "auth-intrigration-9efed.firebaseapp.com",
  projectId: "auth-intrigration-9efed",
  storageBucket: "auth-intrigration-9efed.firebasestorage.app",
  messagingSenderId: "866352193906",
  appId: "1:866352193906:web:011d86009364db5345fdeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);