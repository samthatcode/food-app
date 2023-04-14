import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzeeSUYf3gV7Zfww8RAPLcntuB-5gQM4w",
    authDomain: "food-app-6d414.firebaseapp.com",
    databaseURL: "https://food-app-6d414-default-rtdb.firebaseio.com",
    projectId: "food-app-6d414",
    storageBucket: "food-app-6d414.appspot.com",
    messagingSenderId: "232011676688",
    appId: "1:232011676688:web:dcbc7b9492fefa025b1e95"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
