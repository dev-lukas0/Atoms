import React from "@rbxts/react"
import { useAtom } from "@rbxts/react-charm"
import { TweenService } from "@rbxts/services";
import { Atom } from "shared/atoms"

export function Main() {
    const text = useAtom(Atom);

    return (
        <>
            <textbutton Size={new UDim2(0, 50, 0, 50)} Position={new UDim2(0.308, 0,0.161, 0)} Text={tostring(text)} BackgroundColor3={Color3.fromRGB(13, 199, 171)} Font={Enum.Font.Cartoon} TextSize={25} TextColor3={Color3.fromRGB(255, 255, 255)} ZIndex={2} Event={{
                MouseButton1Click: (rbx) => {
                    rbx.Interactable = false;
                    Atom(Atom() + 1)
                    const tween = TweenService.Create(rbx, new TweenInfo(0.07, Enum.EasingStyle.Quad, Enum.EasingDirection.Out, 0, true), {Rotation: 15})
                    tween.Play()
                    tween.Completed.Once(() => {
                        rbx.Interactable = true;
                    })
                }
            }}>
                <imagelabel Size={new UDim2(2, 0, 2, 0)} Position={new UDim2(-0.5, 0,-0.5, 0)} Image={"rbxassetid://118287476767157"} BackgroundTransparency={1} ImageColor3={Color3.fromRGB(15, 225, 196)}/>
                <uicorner />
            </textbutton>
        </>
    )
}