import { extendTheme } from "@mui/joy/styles";
import { colors } from "./colors";

declare module "@mui/joy/styles" {
  interface Palette {
    main: typeof colors.main.light | typeof colors.main.dark;
    neutral: typeof colors.neutral.light | typeof colors.neutral.dark;
  }
}

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        main: colors.main.light,
        neutral: colors.neutral.light,
        text: {
          primary: colors.neutral.light.high,
          secondary: colors.neutral.light.medium,
          tertiary: colors.neutral.light.low
        }
      }
    },
    dark: {
      palette: {
        main: colors.main.dark,
        neutral: colors.neutral.dark,
        text: {
          primary: colors.neutral.dark.high,
          secondary: colors.neutral.dark.medium,
          tertiary: colors.neutral.dark.low
        }
      }
    }
  },
  typography: {
    h1: { fontSize: "48px" }
  },
  components: {
    JoyTypography: {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          let color;
          switch (ownerState.level) {
            case "h1":
              color = theme.palette.text.primary;
              break;
            case "h3":
              color = theme.palette.text.secondary;
              break;
            case "title-lg":
              color = theme.palette.text.primary;
              break;
            case "title-md":
              color = theme.palette.text.secondary;
              break;
            case "title-sm":
              color = theme.palette.text.secondary;
              break;
            case "body-md":
              color = theme.palette.text.secondary;
              break;
            case "body-sm":
              color = theme.palette.text.tertiary;
              break;
            default:
              color = theme.palette.text.tertiary;
          }
          return {
            transition: "0.3s",
            lineHeight: 1.2,
            fontWeight: 400,
            color
          };
        }
      }
    },
    JoyLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          transition: "0.3s",
          "&:hover": { color: theme.palette.text.primary }
        })
      }
    },
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.neutral.low,
          borderColor: theme.palette.neutral.low,
          transition: "0.3s",
          "&:hover": {
            color: theme.palette.neutral.high,
            backgroundColor: "transparent",
            borderColor: theme.palette.neutral.high
          }
        })
      }
    },
    JoySelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.neutral.low,
          backgroundColor: "transparent",
          borderColor: theme.palette.neutral.low,
          transition: "0.3s",
          "&:hover": {
            color: theme.palette.neutral.high,
            backgroundColor: "transparent",
            borderColor: theme.palette.neutral.high
          }
        })
      }
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.neutral.low,
          borderColor: theme.palette.neutral.low,
          transition: "0.3s",
          "&:hover": {
            color: theme.palette.neutral.high,
            backgroundColor: "transparent",
            borderColor: theme.palette.neutral.high
          }
        })
      }
    }
  }
});
