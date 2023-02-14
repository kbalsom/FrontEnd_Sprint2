// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import stylesheets and functions
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import CareerPage from "./components/CareerPage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Create App Function
function App() {
  return (
    <div className="App">
      {/* Set Up Routes */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

// Export App Function
export default App;
