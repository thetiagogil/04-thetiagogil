import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "@/providers/ThemeProvider";
import type { Lang, ThemeMode } from "@/types/common";
import { Settings } from "lucide-react";
import { useState } from "react";

export const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { mode, setMode } = useTheme();

  const langs: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "pt", label: "PT" },
    { value: "es", label: "ES" },
  ];

  const modes: { value: ThemeMode; label: string }[] = [
    { value: "light", label: t("settings.light") },
    { value: "dark", label: t("settings.dark") },
    { value: "system", label: t("settings.system") },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <button
          aria-label="Close settings"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[2px]"
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Settings panel */}
        {open && (
          <div
            className="w-72 rounded-md border border-border bg-card text-card-foreground shadow-2xl"
            role="dialog"
          >
            <div className="px-5 py-4 border-b border-border">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {t("settings.title")}
              </p>
            </div>
            <div className="p-5 space-y-5">
              {/* Language toggle */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {t("settings.language")}
                </p>
                <div className="grid grid-cols-3 gap-1 p-1 rounded-sm bg-muted">
                  {langs.map((l) => (
                    <button
                      key={l.value}
                      onClick={() => setLang(l.value)}
                      className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-[2px] transition-colors cursor-pointer ${
                        lang === l.value
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme toggle */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {t("settings.theme")}
                </p>
                <div className="grid grid-cols-3 gap-1 p-1 rounded-sm bg-muted">
                  {modes.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setMode(m.value)}
                      className={`px-2 py-1.5 text-xs rounded-[2px] transition-colors cursor-pointer ${
                        mode === m.value
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAB */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={t("settings.open")}
          aria-expanded={open}
          className="h-12 w-12 rounded-full bg-foreground text-background shadow-xl flex items-center justify-center cursor-pointer"
        >
          <Settings
            size={18}
            strokeWidth={1.6}
            style={{
              transition: "transform 0.4s cubic-bezier(0.2,0.7,0.2,1)",
              transform: open ? "rotate(90deg)" : "rotate(0)",
            }}
          />
        </button>
      </div>
    </>
  );
};
