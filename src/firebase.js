import { initializeApp } from "firebase/app";
import {getDatabase} from "firabase/database";

const firebaseConfig = {
  apiKey: "",
  authDomain: "application-form-proj.firebaseapp.com",
  projectId: "application-form-proj",
  storageBucket: "application-form-proj.appspot.com",
  messagingSenderId: "720774174071",
  appId: "1:720774174071:web:6a0860622efca30a993d72"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
