import { db } from "@lib/firebase";

export const getRestaurant = async (ownerId: string) => {
  const restaurantRef = db.collection('restaurants').where('ownerId', '==', ownerId);
  const snapshot = await restaurantRef.get();

  if (snapshot.empty) {
    console.log('No matching restaurant.');
    return null;
  }

  let restaurant;
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    restaurant = doc.data();
  });

  return restaurant;
};

export const updateRestaurant = async (ownerId: string, updatedData:Restaurant) => {
  const restaurantRef = db.collection('restaurants').where('ownerId', '==', ownerId);
  const snapshot = await restaurantRef.get();

  if (snapshot.empty) {
    console.log('No matching restaurant.');
    return;
  }

  let docId;
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    docId = doc.id;
  });

  await db.collection('restaurants').doc(docId).update(updatedData);
};

export const addRestaurant = async (newRestaurant:Restaurant) => {
  const restaurantRef = db.collection('restaurants').where('ownerId', '==', newRestaurant.ownerId);
  const snapshot = await restaurantRef.get();

  if (!snapshot.empty) {
    console.log('Restaurant with this ownerId already exists.');
    return;
  }

  await db.collection('restaurants').add(newRestaurant);
};
