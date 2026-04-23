import { ScrollTopButton } from "@/components/ScrollTopButton";
import { SettingsButton } from "@/components/SettingsButton";

export const FloatingControls = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <ScrollTopButton />
      <SettingsButton />
    </div>
  );
};
