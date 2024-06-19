import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import BottomNav from "../components/BottomNav";
import DateView from "../components/DateView";
import DoctorWithPatientCount from "../components/DoctorWithPatientCount";
import Progress from "../components/Progress";

// Assets
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";
import doctor3 from "../assets/images/doctor3.png";
import { Button } from "../components/Button";

const UpcomingAppointments = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  return (
    <div className="px-6 top-padding bottom-nav-padding bg-app-bg min-h-screen ">
      <h1 className="header1">Appointments</h1>
      <Progress
        {...{ step, setStep }}
        options={["Upcoming", "Completed", "Cancelled"]}
      />
      <div className="mt-8 bg-white rounded10 p-4">
        <div className="flex justify-between mb-4">
          <DoctorWithPatientCount
            rating={4}
            name="Dr. Abaru Johnson"
            specialty="Dentist"
            img_url={doctor3}
            patientsCount={89}
          />
          <VideoIcon
            className="cursor-pointer hover:scale-[1.2] transition-transform"
            onClick={() => navigate("/patient-telemedicine-ehr/call-screen")}
          />
        </div>
        <DateView date="2021-09-10" time="8pm" lg />
        <div className="grid grid-cols-2 mt-3 gap-x-2">
          <Button title="Reschedule" color="primary" className="px-6 py-4" />
          <Button
            title="Cancel"
            color="secondary"
            className=" px-3 py-4"
          />
        </div>
      </div>
      <div className="mt-8 bg-white rounded10 p-4">
        <div className="flex justify-between mb-4">
          <DoctorWithPatientCount
            rating={4}
            name="Dr. Abaru Johnson"
            specialty="Dentist"
            img_url={doctor3}
            patientsCount={89}
          />
          <VideoIcon />
        </div>
        <DateView date="2021-09-10" time="8pm" lg />
        <div className="grid grid-cols-2 mt-3 gap-x-2">
          <Button title="Reschedule" color="primary" className="px-6 py-4" />
          <Button
            title="Cancel"
            color="secondary"
            className="px-3 py-4"
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default UpcomingAppointments;
