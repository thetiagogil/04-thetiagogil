import { IconButton, Option, Select, Stack } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useLanguageContext } from "../../contexts/language.context";
import { useThemeContext } from "../../contexts/theme.context";
import { LANGUAGES } from "../../lib/contants";

export const TopBar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  return (
    <Stack direction="row" justifyContent="end" py={2} gap={2}>
      <Select
        variant="outlined"
        color="neutral"
        value={language}
        onChange={(_, value) => setLanguage(value as any)}
        indicator={false}
        sx={{
          width: 40,
          ".MuiSelect-button": {
            justifyContent: "center",
            fontSize: 12
          }
        }}
      >
        {LANGUAGES.map(language => (
          <Option key={language} value={language} sx={{ justifyContent: "center", fontSize: 12 }}>
            {language.toLocaleUpperCase()}
          </Option>
        ))}
      </Select>

      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => toggleTheme(mode === "light" ? "dark" : "light")}
        sx={{ width: 40 }}
      >
        {mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </IconButton>
    </Stack>
  );
};
