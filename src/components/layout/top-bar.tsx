import { useLanguageContext } from "@/hooks/use-language-context";
import { useThemeContext } from "@/hooks/use-theme-context";
import { LANGUAGES } from "@/lib/contants";
import { IconButton, Option, Select, Stack } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const TopBar = () => {
  const { theme, changeTheme } = useThemeContext();
  const { language, changeLanguage } = useLanguageContext();

  return (
    <Stack direction="row" justifyContent="end" py={2} gap={2}>
      <Select
        variant="outlined"
        color="neutral"
        value={language}
        onChange={(_, value) => value && changeLanguage(value)}
        indicator={false}
        sx={{
          width: 40,
          ".MuiSelect-button": {
            justifyContent: "center",
            fontSize: 12,
          },
        }}
      >
        {LANGUAGES.map((language) => (
          <Option
            key={language}
            value={language}
            sx={{ justifyContent: "center", fontSize: 12 }}
          >
            {language.toLocaleUpperCase()}
          </Option>
        ))}
      </Select>

      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
        sx={{ width: 40 }}
      >
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </IconButton>
    </Stack>
  );
};
