import type { ThemeType } from "@/types/common";
import { createContext } from "react";

type ThemeContextProps = {
  theme: ThemeType;
  changeTheme: (newMode: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
