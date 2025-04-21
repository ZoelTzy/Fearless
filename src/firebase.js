// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSrCgNSyqjRdltjXlHmEe6_9XF4gpHnd8",
  authDomain: "project-web-kelasf.firebaseapp.com",
  projectId: "project-web-kelasf",
  storageBucket: "project-web-kelasf.appspot.com",
  messagingSenderId: "411603186567",
  appId: "1:411603186567:web:f7dea30d747dbcd13bd922",
  measurementId: "G-BFNLYQ1E32"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();