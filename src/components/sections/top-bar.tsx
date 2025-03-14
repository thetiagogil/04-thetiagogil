import { IconButton, Stack } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from "../../contexts/theme.context";

export const TopBar = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Stack direction="row" justifyContent="end" py={2}>
      <IconButton variant="outlined" color="neutral" onClick={() => toggleTheme(mode === "light" ? "dark" : "light")}>
        {mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </IconButton>
    </Stack>
  );
};
