
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDRsrJ0z-6XVFXijjTDz8VNmsOk7Mv6Y-4",
  authDomain: "filmverse-56bba.firebaseapp.com",
  projectId: "filmverse-56bba",
  storageBucket: "filmverse-56bba.appspot.com",
  messagingSenderId: "396020292992",
  appId: "1:396020292992:web:fd3d240683cef652e6f565"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db, "movies");

export default app;