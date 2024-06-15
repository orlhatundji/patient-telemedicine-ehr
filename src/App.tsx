import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
const OnboardingHome = lazy(() => import("./pages/OnboardingHome"));
const Login = lazy(() => import("./pages/auth/Login"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetLinkSent = lazy(() => import("./pages/auth/ResetLinkSent"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/patient-telemedicine-ehr/login" element={<Login />} />
        <Route path="/patient-telemedicine-ehr/reset-password" element={<ResetPassword />} />
        <Route path="/patient-telemedicine-ehr/forgot-password" element={<ForgotPassword />} />
        <Route path="/patient-telemedicine-ehr/reset-link-sent" element={<ResetLinkSent />} />
        <Route path="/patient-telemedicine-ehr/onboarding-home" element={<OnboardingHome />} />
        <Route path="/patient-telemedicine-ehr/" element={<Home />} />
        <Route path="*" element={<Navigate to="/patient-telemedicine-ehr/onboarding-home" replace />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
