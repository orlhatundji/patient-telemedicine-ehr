import React, { useEffect } from "react";

// Context and Utils
import { axiosInstance } from "../utils/baseAxios";

// Components
import { Button } from "../components/Button";
import Progress from "../components/Progress";
import DateView from "../components/DateView";
import BottomNav from "../components/BottomNav";
import DoctorWithPatientCount from "../components/DoctorWithPatientCount";

// Assets
import doctor3 from "../assets/images/doctor3.png";
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";
import { useNavigate } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import { set } from "react-hook-form";
import SkeletonLoader from "../components/SkeletonLoader";

const UpcomingAppointments = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const [appointments, setAppointments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/appointment")
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="px-6 top-padding bottom-nav-padding bg-app-bg min-h-screen ">
      <h1 className="header1">Appointments</h1>
      <Progress
        {...{ step, setStep }}
        options={["Upcoming", "Completed", "Cancelled"]}
      />
      {appointments.length === 0 && !loading && (
        <EmptyState description="You have no upcoming appointments" />
      )}
      {loading && (
        <div className="mt-10 p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      )}
      {appointments.map((appointment: any) => (
        <div className="mt-8 bg-white rounded10 p-4">
          <div className="flex justify-between mb-4">
            <DoctorWithPatientCount
              rating={4}
              name={appointment.doctor.name}
              specialty={appointment.doctor?.specialty}
              img_url={doctor3}
              patientsCount={89}
            />
            <VideoIcon
              className="cursor-pointer hover:scale-[1.2] transition-transform"
              onClick={() => navigate("/meeting")}
            />
          </div>
          <DateView date={appointment.date} lg />
          <div className="grid grid-cols-2 mt-3 gap-x-2">
            <Button title="Reschedule" color="primary" className="px-6 py-4" />
            <Button title="Cancel" color="secondary" className=" px-3 py-4" />
          </div>
        </div>
      ))}
      {appointments.map((appointment: any) => (
        <div className="mt-8 bg-white rounded10 p-4">
          <div className="flex justify-between mb-4">
            <DoctorWithPatientCount
              rating={4}
              name={appointment.doctor.name}
              specialty={appointment.doctor?.specialty}
              img_url={doctor3}
              patientsCount={89}
            />
            <VideoIcon
              className="cursor-pointer hover:scale-[1.2] transition-transform"
              onClick={() => navigate("/meeting")}
            />
          </div>
          <DateView date={appointment.date} lg />
          <div className="grid grid-cols-2 mt-3 gap-x-2">
            <Button title="Reschedule" color="primary" className="px-6 py-4" />
            <Button title="Cancel" color="secondary" className=" px-3 py-4" />
          </div>
        </div>
      ))}
      <BottomNav />
    </div>
  );
};

export default UpcomingAppointments;
