import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calender";
import Dashboard from "./components/Dashboard";
import EventsPage from "./components/EventPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
