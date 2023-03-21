// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuny8fiBdpEHlMSXiLLOzuWr5r2Qll3-Q",
  authDomain: "rodshop-64569.firebaseapp.com",
  projectId: "rodshop-64569",
  storageBucket: "rodshop-64569.appspot.com",
  messagingSenderId: "1096454542986",
  appId: "1:1096454542986:web:4a3e767cbbdba79c173f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)