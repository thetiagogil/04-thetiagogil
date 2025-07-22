import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { theme } from "../styles/theme";
import { ThemeType } from "../types/common";

type ThemeContextProps = {
  theme: ThemeType;
  changeTheme: (newMode: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProviderInner = ({ children }: { children: ReactNode }) => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedMode = (localStorage.getItem("thetiagogil-theme") as ThemeType) || "dark";
    setMode(storedMode);
    setMounted(true);
  }, [setMode]);

  const changeTheme = (newMode: ThemeType) => {
    setMode(newMode);
    localStorage.setItem("thetiagogil-theme", newMode);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme: mode ?? "dark", changeTheme }}>
      <CssBaseline />
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => (
  <CssVarsProvider theme={theme} defaultMode="dark" modeStorageKey="thetiagogil-theme">
    <ThemeProviderInner>{children}</ThemeProviderInner>
  </CssVarsProvider>
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeContextProvider");
  return context;
};
