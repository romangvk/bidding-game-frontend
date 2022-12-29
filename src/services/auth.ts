import { auth } from "../firebase/init";
import { signInAnonymously } from "firebase/auth";

export const refreshToken = () => auth.currentUser?.getIdToken(true);

export const signIn = async () => {
  await refreshToken();
  return signInAnonymously(auth);
};
