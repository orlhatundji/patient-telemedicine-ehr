import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Hooks
import useScreenSize from "./hooks/useScreenSize";

// Components
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
const OnboardingHome = lazy(() => import("./pages/OnboardingHome"));
const Login = lazy(() => import("./pages/auth/Login"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetLinkSent = lazy(() => import("./pages/auth/ResetLinkSent"));
const UpcomingAppointments = lazy(() => import("./pages/UpcomingAppointments"));
const CallScreen = lazy(() => import("./pages/CallScreen"));
const DoctorDetail = lazy(() => import("./pages/DoctorDetail"));
const WriteComplain = lazy(() => import("./pages/WriteComplain"));

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { width } = useScreenSize();
  const isMobileCheck = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  useEffect(() => {
    if (!isMobileCheck()) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);
  return (
    <>
      {!isMobile ? (
        <div className="fixed inset-0 bg-white  flex flex-col items-center justify-center">
          <p className="shadow-lg p-4">This application is only available on mobile</p>
        </div>
      ) : null}
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/patient-telemedicine-ehr/login" element={<Login />} />
            <Route
              path="/patient-telemedicine-ehr/reset-password"
              element={<ResetPassword />}
            />
            <Route
              path="/patient-telemedicine-ehr/forgot-password"
              element={<ForgotPassword />}
            />
            <Route
              path="/patient-telemedicine-ehr/reset-link-sent"
              element={<ResetLinkSent />}
            />
            <Route
              path="/patient-telemedicine-ehr/onboarding-home"
              element={<OnboardingHome />}
            />
            <Route
              path="/patient-telemedicine-ehr/upcoming-appointments"
              element={<UpcomingAppointments />}
            />
            <Route
              path="/patient-telemedicine-ehr/call-screen"
              element={<CallScreen />}
            />
            <Route
              path="/patient-telemedicine-ehr/doctor-detail"
              element={<DoctorDetail />}
            />
            <Route
              path="/patient-telemedicine-ehr/write-complain"
              element={<WriteComplain />}
            />
            <Route path="/patient-telemedicine-ehr/" element={<Home />} />
            <Route
              path="*"
              element={
                <Navigate
                  to="/patient-telemedicine-ehr/onboarding-home"
                  replace
                />
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
