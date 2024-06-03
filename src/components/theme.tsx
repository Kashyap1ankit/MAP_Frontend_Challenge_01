import { MouseEventHandler, useContext } from "react";
import Image from "./image";
import { ThemeContext } from "../context";
import useChangeTheme from "../hooks/useThemeChange";

export default function ThemeButton({ fn }: { fn: MouseEventHandler }) {
  const theme = useContext(ThemeContext); //Setting the theme
  useChangeTheme();
  return (
    <div className="z-120">
      {theme === "light" ? (
        <div
          onClick={fn}
          className="w-fit  p-2 border-2 fixed top-2 rounded-full right-4 border-2 bg-black"
        >
          <Image link="svg/dark.svg" className="size-6 invert" />
        </div>
      ) : (
        <div
          onClick={fn}
          className="w-fit p-2 border-2 fixed top-2 rounded-full right-4 border-2 bg-white"
        >
          <Image link="svg/light.svg" className="size-6  " />
        </div>
      )}
    </div>
  );
}
