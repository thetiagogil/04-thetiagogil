import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TimelinePage from "./pages/timeline/TimelinePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeline" element={<TimelinePage />} />
    </Routes>
  );
}

export default App;
