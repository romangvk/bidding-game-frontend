import { functions } from "../firebase/init";
import { httpsCallable } from "firebase/functions";

export const createRoom = httpsCallable<string, string>(
  functions,
  "createRoom"
);
export const joinRoom = httpsCallable<{ name: string; room: string }, string>(
  functions,
  "joinRoom"
);

export const increment = httpsCallable<undefined, string>(
  functions,
  "increment"
);
