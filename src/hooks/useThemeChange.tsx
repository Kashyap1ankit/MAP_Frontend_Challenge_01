import { useContext, useEffect } from "react";
import { ThemeContext } from "../context";

export default function useChangeTheme() {
  const theme = useContext(ThemeContext);
  const themeOpposite = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(themeOpposite);
    root.classList.add(theme);
  }, [theme, themeOpposite]);
  return { theme };
}
