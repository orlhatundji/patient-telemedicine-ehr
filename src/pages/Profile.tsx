import { useState } from "react";

// Components
import { ProgressB } from "../components/Progress";
import BottomNav from "../components/BottomNav";
import LoginAndSecurity from "../components/LoginAndSecurity";
import MedicalCard from "../components/MedicalCard";
import PersonalProfile from "../components/PersonalProfile";

// Assets
import { ReactComponent as RocketIcon } from "../assets/icons/rocket.svg";
import person from "../assets/images/person.png";

const Profile = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="px-6 top-padding bottom-nav-padding flex flex-col h-screen overflow-hidden">
      <h1 className="header1">Profile</h1>
      <div className="flex items-center gap-x-4 mt-8">
        <img
          src={person}
          alt=""
          className="rounded-full h-16 w-16 object-center"
        />
        <div className="">
          <h2 className="text-lg font-semibold leading-[1.35rem]">
            Michael Akinsola
          </h2>
          <span className="text-grey-100">Educator</span>
        </div>
      </div>
      <div className="flex mt-10 gap-x-4 justify-between">
        <div className="flex gap-x-2">
          <div className="rounded10 h-10 p-3 bg-primary/[0.08]">
            <RocketIcon />
          </div>
          <div className="flex flex-col gap-y-.5">
            <h3 className="font-bold text-sm leading-[1.05rem]">60mins</h3>
            <span className="text-xs">Total appointment</span>
            <span className="text-xs">time</span>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="rounded10 h-10 p-3 bg-primary/[0.08]">
            <RocketIcon />
          </div>
          <div className="flex flex-col gap-y-.5">
            <h3 className="font-bold text-sm leading-[1.05rem]">60mins</h3>
            <span className="text-xs">Appointments</span>
            <span className="text-xs">completed</span>
          </div>
        </div>
      </div>
      <ProgressB
        options={["Medical card", "Personal profile", "Login & Security"]}
        centered
        {...{ step, setStep }}
      />

      {step === 0 && <MedicalCard />}
      {step === 1 && <PersonalProfile />}
      {step === 2 && <LoginAndSecurity />}

      <BottomNav />
    </div>
  );
};

export default Profile;
