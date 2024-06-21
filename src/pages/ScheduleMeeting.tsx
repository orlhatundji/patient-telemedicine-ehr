import React from "react";
import { useNavigate } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import BackButton from "../components/BackArrow";

const ScheduleMeeting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <InlineWidget url="https://calendly.com/orlhatundji/consultation" />
      <div className="flex items-center justify-center">
        <BackButton onClick={() => navigate("/patient-telemedicine-ehr/doctor-detail")} />
      </div>
    </div>
  );
};

export default ScheduleMeeting;
