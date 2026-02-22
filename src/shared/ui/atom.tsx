import React from "@rbxts/react"
import { useAtom } from "@rbxts/react-charm"
import { Atom } from "shared/atoms"

export function Main() {
    const text = useAtom(Atom);

    return (
        <>
            <textlabel Text={tostring(text)} Size={new UDim2(0, 50, 0, 50)} Position={new UDim2(0, 50, 0, 50)}/>
        </>
    )
}