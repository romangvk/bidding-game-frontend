import { firebaseConfig } from "./config";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const functions = getFunctions(app);
const database = getDatabase(app);

if (process.env.REACT_APP_LOCAL === "true") {
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectDatabaseEmulator(database, "localhost", 9000);
  connectAuthEmulator(auth, "http://localhost:9099");
}

export { app, auth, functions, database };
