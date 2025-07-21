import { Divider, Drawer, IconButton, Radio, RadioGroup, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useLanguageContext } from "../../contexts/language.context";
import { useThemeContext } from "../../contexts/theme.context";
import { LANGUAGES } from "../../lib/contants";
import { Languages } from "../../types/common";

export const FloatMenu = () => {
  const { t } = useLanguageContext();
  const [open, setOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  return (
    <>
      <IconButton
        color="neutral"
        variant="outlined"
        size="lg"
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: "background.body",
          position: "fixed",
          bottom: 24,
          right: 16,
          borderRadius: "lg",
          zIndex: 2000,
          boxShadow: "lg"
        }}
      >
        <IoMdMenu size={20} />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)} anchor="right" size="sm">
        <Stack width="100%" py={3} px={2} gap={2}>
          <Typography level="title-lg" fontWeight="lg">
            {t("settings")}
          </Typography>

          <Divider />

          <Stack gap={2}>
            <Typography level="body-sm" textColor="neutral.medium">
              {t("theme")}
            </Typography>
            <RadioGroup name="theme" value={mode} onChange={e => toggleTheme(e.target.value as "light" | "dark")}>
              <Radio label="Light" value="light" />
              <Radio label="Dark" value="dark" />
            </RadioGroup>
          </Stack>

          <Divider />

          <Stack gap={2}>
            <Typography level="body-sm" textColor="neutral.medium">
              {t("language")}
            </Typography>
            <RadioGroup name="language" value={language} onChange={e => setLanguage(e.target.value as Languages)}>
              {LANGUAGES.map(lang => (
                <Radio key={lang} value={lang} label={lang.toUpperCase()} />
              ))}
            </RadioGroup>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};
