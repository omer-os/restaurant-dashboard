import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAVZkkclCZfSNjxg07fHsiMelxcRg0xWms",
  authDomain: "restaurant-backend-8ea26.firebaseapp.com",
  projectId: "restaurant-backend-8ea26",
  storageBucket: "restaurant-backend-8ea26.appspot.com",
  messagingSenderId: "1086961901693",
  appId: "1:1086961901693:web:e63942bff81fd65e691114",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
