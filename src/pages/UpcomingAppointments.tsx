import React from "react";

// Components
import DateView from "../components/DateView";
import DoctorWithPatientCount from "../components/DoctorWithPatientCount";
import Progress from "../components/Progress";

// Assets
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";
import doctor3 from "../assets/images/doctor3.png";
import { Button } from "../components/Button";

const UpcomingAppointments = () => {
  const [step, setStep] = React.useState(0);
  return (
    <div className="px-6 py-8 bg-app-bg min-h-screen">
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
          <VideoIcon />
        </div>
        <DateView date="12th July 2021" time="8pm" lg />
        <div className="flex mt-3 gap-x-2">
          <Button title="Reschedule" color="primary" className="px-6 py-4" />
          <Button title="Cancel Appointment" color="secondary" className=" px-3 py-4" />
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
        <DateView date="12th July 2021" time="8pm" lg />
        <div className="flex mt-3 gap-x-2">
          <Button title="Reschedule" color="primary" className="px-6 py-4" />
          <Button title="Cancel Appointment" color="secondary" className=" px-3 py-4" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
