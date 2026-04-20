import { SettingsButton } from "@/components/SettingsButton";
import { SiteHeader } from "@/components/SiteHeader";
import { HomePage } from "@/pages/home";
import { ProjectPage } from "@/pages/project";
import { TimelinePage } from "@/pages/timeline";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SettingsButton />
    </div>
  );
};
