import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBRM10mFzhLQ4bX5WvZ-aGPD7cMDiah2WI",
  authDomain: "databasegibdd.firebaseapp.com",
  databaseURL: "https://databasegibdd-default-rtdb.firebaseio.com/",
  projectId: "databasegibdd",
  storageBucket: "databasegibdd.firebasestorage.app",
  messagingSenderId: "573525705369",
  appId: "1:573525705369:web:45d432d3dcf160c88eae08"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };