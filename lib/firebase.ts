import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuth } from "@clerk/nextjs";

const config = {
  apiKey: "AIzaSyAVZkkclCZfSNjxg07fHsiMelxcRg0xWms",
  authDomain: "restaurant-backend-8ea26.firebaseapp.com",
  projectId: "restaurant-backend-8ea26",
  storageBucket: "restaurant-backend-8ea26.appspot.com",
  messagingSenderId: "1086961901693",
  appId: "1:1086961901693:web:e63942bff81fd65e691114",
};

const app = !getApps().length ? initializeApp(config) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
