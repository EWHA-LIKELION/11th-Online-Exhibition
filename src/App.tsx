import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AboutPage from "./pages/AboutPage";
import EpiloguePage from "./pages/EpiloguePage";
import CreditsPage from "./pages/CreditsPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/hackathon" element={<ProjectPage />} />
			<Route path="/graduation" element={<ProjectPage />} />
			<Route path="/hackathon/:id" element={<ProjectDetailPage />} />
			<Route path="/graduation/:id" element={<ProjectDetailPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/epilogue" element={<EpiloguePage />} />
			<Route path="/credits" element={<CreditsPage />} />
		</Routes>
	);
}

export default App;
