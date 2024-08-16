import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Hooks|Contexts
import { useAuth } from "./contexts/authContext";
import { useCallContext } from "./contexts/callContext";
import useScreenSize from "./hooks/useScreenSize";

// Components
import Loader from "./components/Loader";
import InstallButton from "./components/InstallButton";
import VideoFeed from "./components/VideoFeed";

// Pages
import Home from "./pages/Home";
const ZoomComponent = lazy(() => import("./components/ZoomComponent"));
const OnboardingHome = lazy(() => import("./pages/OnboardingHome"));
const Login = lazy(() => import("./pages/auth/Login"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetLinkSent = lazy(() => import("./pages/auth/ResetLinkSent"));
const UpcomingAppointments = lazy(() => import("./pages/UpcomingAppointments"));
const CallScreen = lazy(() => import("./pages/CallScreen"));
const DoctorDetail = lazy(() => import("./pages/DoctorDetail"));
const WriteComplain = lazy(() => import("./pages/WriteComplain"));
const Profile = lazy(() => import("./pages/Profile"));
const Prescriptions = lazy(() => import("./pages/Prescriptions"));
const MedicalHistoryForm = lazy(() => import("./pages/MedicalHistoryForm"));
const ScheduleMeeting = lazy(() => import("./pages/ScheduleMeeting"));

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { isAuthenticated } = useAuth();
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
  const { isCallActive } = useCallContext();
  return (
    <>
      {!isMobile ? (
        <div className="z-[1000] fixed inset-0 bg-white  flex flex-col items-center justify-center">
          <p className="shadow-lg p-4">This application is only available on mobi le</p>
        </div>
      ) : null}
      <Router basename="/">
        <InstallButton />
        {isCallActive && <VideoFeed />}
        <Suspense fallback={<Loader />}>
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-link-sent" element={<ResetLinkSent />} />
                <Route path="/onboarding-home" element={<OnboardingHome />} />
                <Route
                  path="*"
                  element={<Navigate to="/login" replace />}
                />
              </>
            ) : (
              <>
                (
                <Route
                  path="/appointments"
                  element={<UpcomingAppointments />}
                />
                <Route path="/call-screen" element={<CallScreen />} />
                <Route path="/doctor-detail/:id" element={<DoctorDetail />} />
                <Route path="/write-complain" element={<WriteComplain />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/prescription" element={<Prescriptions />} />
                <Route
                  path="/medical-history-form"
                  element={<MedicalHistoryForm />}
                />
                <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
                <Route path="/meeting" element={<ZoomComponent />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              </>
            )}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
