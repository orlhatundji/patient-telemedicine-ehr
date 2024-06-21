import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Button } from "../components/Button";
import { ProgressA } from "../components/Progress";

// Assets
import { ReactComponent as UserIcon } from "../assets/icons/user_outline.svg";
import doctor3 from "../assets/images/doctor3.png";
import license from "../assets/images/license.png";
import Reviews from "../components/Reviews";
import BackArrow from "../components/BackArrow";

const DoctorDetail = () => {
  const navigate = useNavigate();

  const [step, setStep] = React.useState(0);
  return (
    <div className="relative px-6 pt-8 pb-36 bg-app-bg min-h-screen">
      <BackArrow className="float-left" />
      <h1 className="header4  text-center">Doctor's details</h1>
      <div className="mt-11 flex">
        <img src={doctor3} alt="" className="w-36" />
        <div className="flex py-2">
          <div className="ml-5 flex flex-col">
            <h2 className="header2">Dr. Abaru Johnson</h2>
            <span className="text-sm text-grey-200 flex-1">Dentist</span>
            <div className="flex gap-x-2">
              <UserIcon />
              <span className="text-sm">3 visits</span>
            </div>
          </div>
        </div>
      </div>
      <ProgressA
        step={step}
        setStep={setStep}
        options={["About me", "Reviews"]}
      />

      {step === 0 ? (
        <div className="mt-4">
          <p className="text-grey-300 text-sm leading-[1.15rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            maiores recusandae laudantium necessitatibus voluptatem atque
            delectus culpa quasi quo nemo architecto inventore rem, pariatur
            nisi omnis labore a iusto unde,{" "}
            <span className="font-bold whitespace-nowrap">Show More</span>
          </p>
          <div className="mt-10">
            <h2 className="header2 text-base">Languages</h2>
            <p className="text-grey-300 mt-1">English, Yoruba, French, Igbo</p>
          </div>

          <div className="mt-10">
            <h2 className="header2 text-base">License No</h2>
            <p className="mt-1">
              <img
                src={license}
                alt=""
                className="rounded10 border-2 shadow-sm"
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Reviews />
        </div>
      )}

      <div className="bg-app-bg fixed bottom-0 pb-4 inset-x-4 flex flex-col gap-y-2">
        <Button
          className=""
          color="secondary"
          onClick={() => navigate("/patient-telemedicine-ehr/schedule-meeting")}
          title="Schedule appointment"
        />
        <Button
          className=""
          onClick={() => navigate("/patient-telemedicine-ehr/write-complain")}
          title="Write complaint"
        />
      </div>
    </div>
  );
};

export default DoctorDetail;
