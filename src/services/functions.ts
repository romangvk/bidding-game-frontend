import { functions } from "../firebase/init";
import { httpsCallable } from "firebase/functions";

export const helloWorld = httpsCallable<undefined, string>(
  functions,
  "helloWorld"
);
