import { atom } from "jotai";
export const clicked = atom(console.log("gw di klik anjing"));

//untuk memamnggil pakai ini
import { useAtom } from "jotai";
import { clicked } from "./jotai/atoms";

const [click, setClicked] = useAtom(clicked);
<button onClick={() => setClicked(console.log("berubahh anjeng"))}></button>;
