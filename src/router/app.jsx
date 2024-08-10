import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { TimelinePage } from "../pages/timeline.page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
