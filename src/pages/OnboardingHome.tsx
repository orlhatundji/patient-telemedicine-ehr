import React from "react";
import { useNavigate } from "react-router";

// Assets
import { ReactComponent as Doctors } from "../assets/images/doctors.svg";
import { ReactComponent as Bullet } from "../assets/icons/bullet_tick-circle-outline.svg";
import AuthHeader from "../components/AuthHeader";
import { Button } from "../components/Button";

const OnboardingHome: React.FC = () => {
  const navigate = useNavigate();
  return(
  <div className="pb-8 flex flex-col items-center">
    <AuthHeader type="white" />
    <div className="px-6">
      <Doctors className="mt-[25%]" />
      <h1 className="header1 mt-12 w-full">
        Welcome to your <br /> Telemedicine App
      </h1>
      <p className="font-semibold text-sm mt-4">
        With our app, patients can now:
      </p>
      <ul className="patient_pecks_list mt-3 max-w-[257px] flex flex-col gap-y-2 description2">
        <li className="flex gap-x-2">
          <Bullet className="min-w-[1.3em]" />{" "}
          <p className="">Reach out to their doctors from anywhere</p>
        </li>
        <li className="flex gap-x-2">
          <Bullet className="min-w-[1.3em]" /> Schedule Online appointments with
          their doctors
        </li>
        <li className="flex gap-x-2">
          <Bullet className="min-w-[1.3em]" /> Manage their time apporiately
        </li>
      </ul>
      <Button title="Continue" color="primary" className="mt-12" onClick={() => navigate("/patient-telemedicine-ehr/login")} />
    </div>
  </div>
)};

export default OnboardingHome;
