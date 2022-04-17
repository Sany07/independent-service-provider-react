import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxoDkrxVQwI3kTTAJuJrNo9MJUogxVuzE",
  authDomain: "photography-b0a33.firebaseapp.com",
  projectId: "photography-b0a33",
  storageBucket: "photography-b0a33.appspot.com",
  messagingSenderId: "441588104527",
  appId: "1:441588104527:web:dee4c487558458dffad93a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
