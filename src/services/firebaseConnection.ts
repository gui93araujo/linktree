import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2zZXQMJUq2etQbgegT_ONaioW4YjI01g",
  authDomain: "reactlinks-c3bfe.firebaseapp.com",
  projectId: "reactlinks-c3bfe",
  storageBucket: "reactlinks-c3bfe.firebasestorage.app",
  messagingSenderId: "421610753161",
  appId: "1:421610753161:web:a94664546c6d3c98f28a58",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
