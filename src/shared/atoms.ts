import { atom } from "jotai";

const themeAtom = atom<"LIGHT" | "DARK">("DARK");

export { themeAtom };
