import { atom, subscribe } from "@rbxts/charm";

export const Atom = atom(0);

subscribe(Atom, () => {
    print(Atom()); // 1, 2, ...
});