import { HomePage } from "@/pages/home.page";
import { LandingPage } from "@/pages/landing.page";
import { TimelinePage } from "@/pages/timeline.page";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
