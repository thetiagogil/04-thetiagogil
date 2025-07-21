import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { theme } from "../styles/theme";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextProps = {
  mode: ThemeMode;
  toggleTheme: (newMode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedMode = (localStorage.getItem("thetiagogil-theme") as ThemeMode) || "system";
    setMode(storedMode);
  }, [setMode]);

  if (!mounted) return null;

  const toggleTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem("thetiagogil-theme", newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode: mode ?? "light", toggleTheme }}>
      <CssBaseline />
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CssVarsProvider theme={theme} defaultMode="system" modeStorageKey="thetiagogil-theme">
      <ThemeProvider>{children}</ThemeProvider>
    </CssVarsProvider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }
  return context;
};
