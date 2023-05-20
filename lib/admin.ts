const admin = require("firebase-admin");


if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert("../secret.json"),
  });
}

export const AdminDb = admin.firestore();

export default admin;
