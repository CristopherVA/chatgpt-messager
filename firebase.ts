import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const ENV =
{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
}


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    projectId: ENV.FIREBASE_PROJECT_ID,
    storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID
}



/* {
   apiKey: "AIzaSyBDx93PRAU12RRgwYZYA5igM0Qjf7sWY5A",
   authDomain: "chatgpt-messager-b134f.firebaseapp.com",
   projectId: "chatgpt-messager-b134f",
   storageBucket: "chatgpt-messager-b134f.appspot.com",
   messagingSenderId: "664791263358",
   appId: "1:664791263358:web:f25d8315a9e50e5ece502f"
}; */

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }