import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAVZkkclCZfSNjxg07fHsiMelxcRg0xWms",
  authDomain: "restaurant-backend-8ea26.firebaseapp.com",
  projectId: "restaurant-backend-8ea26",
  storageBucket: "restaurant-backend-8ea26.appspot.com",
  messagingSenderId: "1086961901693",
  appId: "1:1086961901693:web:e63942bff81fd65e691114",
};

const app = firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth(app);

export default app;
