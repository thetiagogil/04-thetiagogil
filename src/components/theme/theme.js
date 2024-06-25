import { extendTheme } from "@mui/joy/styles";
import { colors } from "../colors/colors";

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          white: colors.white,
          white2: colors.white2,
          white3: colors.white3,
          blue: colors.blue,
          green: colors.green,
          yellow: colors.yellow,
          pink: colors.pink,
        },
        secondary: {
          blueBg: colors.blueBg,
          greenBg: colors.greenBg,
          yellowBg: colors.yellowBg,
          pinkBg: colors.pinkBg,
          baseHv: colors.baseHv,
          blueHv: colors.blueHv,
          greenHv: colors.greenHv,
          yellowHv: colors.yellowHv,
          pinkHv: colors.pinkHv,
        },
      },
    },
  },
  typography: {
    h1: {
      color: colors.white,
      fontSize: "48px",
    },
    h3: {
      color: colors.white2,
    },
    "title-lg": {
      color: colors.white,
    },
    "title-md": {
      color: colors.white2,
    },
    "title-sm": {
      color: colors.white2,
    },
    "body-md": {
      color: colors.white2,
      lineHeight: "1.2",
    },
    "body-sm": {
      color: colors.white3,
      lineHeight: "1.2",
    },
  },
});
