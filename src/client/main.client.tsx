import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { Main } from "shared/ui/atom";

const gui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
const screen = new Instance("ScreenGui");
screen.Parent = gui;

const root = createRoot(screen);

root.render(<Main />);