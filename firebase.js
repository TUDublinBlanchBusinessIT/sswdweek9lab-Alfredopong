import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzWtDyGQqN_QFOfHb4u9jF9m4TzR4iXg",
  authDomain: "mawk8-firebase.firebaseapp.com",
  projectId: "mawk8-firebase",
  storageBucket: "mawk8-firebase.firebasestorage.app",
  messagingSenderId: "105480115795",
  appId: "1:105480115795:web:bb51662d7bbf2d231c18a6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);