import { atom, subscribe } from "@rbxts/charm";

export const Atom = atom(2);

subscribe(Atom, () => {
    print(Atom());
});