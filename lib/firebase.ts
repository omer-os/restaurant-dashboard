import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAVZkkclCZfSNjxg07fHsiMelxcRg0xWms",
  authDomain: "restaurant-backend-8ea26.firebaseapp.com",
  projectId: "restaurant-backend-8ea26",
  storageBucket: "restaurant-backend-8ea26.appspot.com",
  messagingSenderId: "1086961901693",
  appId: "1:1086961901693:web:e63942bff81fd65e691114",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
