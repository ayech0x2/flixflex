import { atom } from "jotai";
import { AlertPayload } from "./types";
import { User } from "firebase/auth";

const themeAtom = atom<"LIGHT" | "DARK">("DARK");

const alertAtom = atom<AlertPayload | null>(null);

const userAtom = atom<User | null | undefined>();

export { themeAtom, alertAtom, userAtom };
