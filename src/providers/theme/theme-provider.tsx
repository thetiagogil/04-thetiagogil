import { ThemeContext } from "@/providers/theme/theme-context";
import { theme } from "@/styles/theme";
import type { ThemeType } from "@/types/common";
import { CssBaseline, CssVarsProvider, useColorScheme } from "@mui/joy";
import { useEffect, useState, type ReactNode } from "react";

const ThemeProviderInner = ({ children }: { children: ReactNode }) => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedMode =
      (localStorage.getItem("thetiagogil-theme") as ThemeType) || "dark";
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
  <CssVarsProvider
    theme={theme}
    defaultMode="dark"
    modeStorageKey="thetiagogil-theme"
  >
    <ThemeProviderInner>{children}</ThemeProviderInner>
  </CssVarsProvider>
);
