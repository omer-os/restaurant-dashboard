import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";

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
export const storage = firebase.storage();
export const auth = getAuth(app);





export async function uploadFile(path: string, file: File | Blob) {
  const storage = getStorage(app);
  const storageRef = ref(storage, path);

  // 'uploadBytes' function returns a promise that resolves with an UploadResult
  try {
    const result = await uploadBytes(storageRef, file);
    console.log('Uploaded file:', result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}




export default app;
