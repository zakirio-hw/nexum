import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCrMLJcg4OWmeOChtciTVGctQyMWfLCyDs",
  authDomain: "nexum-99f66.firebaseapp.com",
  projectId: "nexum-99f66",
  storageBucket: "nexum-99f66.appspot.com",
  messagingSenderId: "523262067761",
  appId: "1:523262067761:web:8bf11c9ecc25ca15ec4110",
  measurementId: "G-W0WEKJD7K5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();