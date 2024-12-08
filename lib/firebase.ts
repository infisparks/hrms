// lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDIqsfSboy6qTReD_mNezH7IHtQNajHwTA",
  authDomain: "reactnative-ae2ac.firebaseapp.com",
  databaseURL: "https://reactnative-ae2ac-default-rtdb.firebaseio.com",
  projectId: "reactnative-ae2ac",
  storageBucket: "reactnative-ae2ac.firebasestorage.app",
  messagingSenderId: "862062566283",
  appId: "1:862062566283:web:ad47446371e2fe27802d8e",
  measurementId: "G-DJKJ5284R9"
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
