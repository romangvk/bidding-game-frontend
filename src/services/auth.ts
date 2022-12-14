import { auth } from "../firebase/init";
import { signInAnonymously } from "firebase/auth";

export const signIn = () => signInAnonymously(auth);
