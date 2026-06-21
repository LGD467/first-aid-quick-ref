import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import InjuryDetailPage from "@/pages/InjuryDetailPage";
import SearchPage from "@/pages/SearchPage";
import EmergencyPage from "@/pages/EmergencyPage";
import AboutPage from "@/pages/AboutPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/injury/:id" element={<InjuryDetailPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}
