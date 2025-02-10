import { extendTheme } from "@mui/joy/styles";
import { colors } from "./colors";

declare module "@mui/joy/styles" {
  interface Palette {
    main: typeof colors.main;
    neutral: typeof colors.neutral;
  }
}

export const theme = extendTheme({
  colorSchemes: { dark: { palette: { main: colors.main, neutral: colors.neutral } } },
  typography: {
    h1: { color: colors.neutral.lightest, fontSize: "48px" },
    h3: { color: colors.neutral.lighter },
    "title-lg": { color: colors.neutral.lightest },
    "title-md": { color: colors.neutral.lighter },
    "title-sm": { color: colors.neutral.lighter },
    "body-md": { color: colors.neutral.lighter, lineHeight: "1.2" },
    "body-sm": { color: colors.neutral.light, lineHeight: "1.2" }
  },
  components: {
    JoyTypography: { styleOverrides: { root: () => ({ transition: "0.3s", lineHeight: 1.2, fontWeight: 400 }) } },
    JoyLink: {
      styleOverrides: {
        root: () => ({
          color: colors.neutral.lighter,
          transition: "0.3s",
          "&:hover": { color: colors.neutral.lightest }
        })
      }
    },
    JoyButton: {
      styleOverrides: {
        root: () => ({
          borderColor: colors.neutral.light,
          transition: "0.3s",
          "&:hover": { backgroundColor: "transparent", borderColor: colors.neutral.lightest }
        })
      }
    },
    JoySelect: {
      styleOverrides: {
        root: () => ({
          backgroundColor: "transparent",
          borderColor: colors.neutral.light,
          transition: "0.3s",
          "&:hover": { backgroundColor: "transparent", borderColor: colors.neutral.lightest }
        })
      }
    }
  }
});
