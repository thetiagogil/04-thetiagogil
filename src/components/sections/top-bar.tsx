import { IconButton, Stack } from "@mui/joy";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const TopBar = () => {
  const [mode, setMode] = useState<"light" | "dark">(localStorage.getItem("joy-mode") === "dark" ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("joy-mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <Stack direction="row" justifyContent="end">
      <IconButton onClick={toggleTheme}>{mode === "dark" ? <MdDarkMode /> : <MdLightMode />}</IconButton>
    </Stack>
  );
};
