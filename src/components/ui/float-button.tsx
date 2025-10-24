import { useLanguageContext } from "@/hooks/use-language-context";
import { useThemeContext } from "@/hooks/use-theme-context";
import { LANGUAGES, THEMES } from "@/lib/contants";
import { capFirstLetter } from "@/lib/utils";
import type { LanguagesType, ThemeType } from "@/types/common";
import {
  Divider,
  Drawer,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

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
          bottom: 12,
          right: 12,
          borderRadius: "50%",
          zIndex: 2000,
          boxShadow: "lg",
        }}
      >
        <IoMdMenu size={20} />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
        size="sm"
      >
        <Stack width="100%" py={3} px={2} gap={2}>
          <Typography level="title-lg" fontWeight="lg">
            {t("settings")}
          </Typography>

          <Divider />

          <Stack gap={2}>
            <Typography level="body-sm" textColor="neutral.medium">
              {t("theme")}
            </Typography>
            <RadioGroup
              name="theme"
              value={theme}
              onChange={(e) => changeTheme(e.target.value as ThemeType)}
            >
              {THEMES.map((t) => (
                <Radio
                  key={t}
                  value={t.toLocaleLowerCase()}
                  label={capFirstLetter(t)}
                />
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
              onChange={(e) => changeLanguage(e.target.value as LanguagesType)}
            >
              {LANGUAGES.map((l) => (
                <Radio key={l} value={l} label={capFirstLetter(l)} />
              ))}
            </RadioGroup>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};
