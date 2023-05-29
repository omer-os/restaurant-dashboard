import { initializeApp, getApps, cert, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

const firebaseAdminConfig = {
  credential: cert(serviceAccount),
};

const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);

export const db = getFirestore(app);

export default app;
