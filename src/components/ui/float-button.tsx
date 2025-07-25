import { Divider, Drawer, IconButton, Radio, RadioGroup, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useLanguageContext } from "../../contexts/language.context";
import { useThemeContext } from "../../contexts/theme.context";
import { LANGUAGES, THEMES } from "../../lib/contants";
import { capFirstLetter } from "../../lib/utils";
import { LanguagesType, ThemeType } from "../../types/common";

export const FloatMenu = () => {
  const { t } = useLanguageContext();
  const [open, setOpen] = useState(false);
  const { theme, changeTheme } = useThemeContext();
  const { language, changeLanguage } = useLanguageContext();

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
            <RadioGroup name="theme" value={theme} onChange={e => changeTheme(e.target.value as ThemeType)}>
              {THEMES.map(t => (
                <Radio key={t} value={t.toLocaleLowerCase()} label={capFirstLetter(t)} />
              ))}
            </RadioGroup>
          </Stack>

          <Divider />

          <Stack gap={2}>
            <Typography level="body-sm" textColor="neutral.medium">
              {t("language")}
            </Typography>
            <RadioGroup
              name="language"
              value={language}
              onChange={e => changeLanguage(e.target.value as LanguagesType)}
            >
              {LANGUAGES.map(l => (
                <Radio key={l} value={l} label={capFirstLetter(l)} />
              ))}
            </RadioGroup>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};
