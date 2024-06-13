import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Loader from "./components/Loader";

// Pages
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/patient-telemedicine-ehr/about" element={<About />}></Route>
        <Route path="/patient-telemedicine-ehr/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
