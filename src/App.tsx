import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav className="p-4">
        <ul className="flex gap-y-4 justify-end">
          <li>
            <Link to="/">-Home-</Link>
          </li>
          <li>
            <Link to="/about">-About-</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/patient-telemedicine-ehr/about" element={<About />}></Route>
        <Route path="/patient-telemedicine-ehr/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
