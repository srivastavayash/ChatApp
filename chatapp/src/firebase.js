import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCsqtO3F3G61vVDHw2iffkIH2jxQEQGJIU",
    authDomain: "chat-d05ed.firebaseapp.com",
    projectId: "chat-d05ed",
    storageBucket: "chat-d05ed.appspot.com",
    messagingSenderId: "249340978625",
    appId: "1:249340978625:web:3fdc4de35e3dec67a5fb40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
