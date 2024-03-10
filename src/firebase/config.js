// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYbZvC9olPvQ0kvLgrRkqRomdZ0aheymU",
  authDomain: "divinogames-47439.firebaseapp.com",
  projectId: "divinogames-47439",
  storageBucket: "divinogames-47439.appspot.com",
  messagingSenderId: "686164158446",
  appId: "1:686164158446:web:127f0fc5f3ef52af21d0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage  = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});



