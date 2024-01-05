import "./App.css";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" element={HomePage} />
        <Route path="/about" element={AboutPage} />
      </Switch>
    </Routes>
  );
}

export default App;
