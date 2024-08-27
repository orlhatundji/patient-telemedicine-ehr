import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Utils
import { axiosInstance } from "../utils/baseAxios";
import { useAuth } from "../contexts/authContext";

// Components
import { Button } from "../components/Button";
import DateView from "../components/DateView";
import BottomNav from "../components/BottomNav";
import DoctorWithRating from "../components/DoctorWithRating";

// Assets
import doctor1 from "../assets/images/doctor1.png";
import doctor3 from "../assets/images/doctor3.png";
import { ReactComponent as UserIcon } from "../assets/icons/user_outline.svg";
import { ReactComponent as ClockIcon } from "../assets/icons/time.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [assignedDoctors, setAssignedDoctors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    axiosInstance
      .get("/patient/assigned-doctors")
      .then((res) => {
        setAssignedDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="px-6 top-padding bottom-nav-padding">
      <div className="flex justify-between">
        <div className="">
          <span className="description1">Good morning, Simon</span>
          <h1 className="header1 mt-1">Stay Healthy</h1>
        </div>
        <div className="relative mt-2">
          <NotificationIcon
            onClick={() => logout()}
          />
          <div
            className={twMerge(
              "rounded-full bg-primary p-1 h-3 w-3 min-h-[.75rem] min-w-[.75rem]",
              "flex items-center justify-center text-[.5rem] text-white",
              "absolute -top-1 left-3"
            )}
          >
            4
          </div>
        </div>
      </div>
      <div className="mt-6 rounded10 bg-secondary-300 flex items-center justify-between px-4 py-3">
        <p className="description2 leading-[.95rem] max-w-[60%]">
          Dr. Kelly Johnson is requesting an appointment with you
        </p>
        <Button
          title="Accept"
          color="primary"
          className="w-fit px-6 py-2 rounded10"
          titleStyle="text-sm"
        />
      </div>
      <h2 className="header2 mt-9">Upcoming Appointments</h2>
      <Link to="/appointments">
        <div className="relative">
          <div className="absolute top-0 -bottom-2 left-6 right-6 bg-off-white-300/[35%] rounded10 -z-10" />
          <div className="absolute top-0 -bottom-4 left-8 right-8 bg-off-white-300/[6.67%] rounded10 -z-10" />
          <div className="mt-4 bg-primary rounded10 px-6 py-4">
            <div className="flex gap-x-4 items-center">
              <img src={doctor1} alt="doctor" className="max-w-[55px]" />
              <div className="">
                <h2 className="header2 header2 text-off-white-100">
                  Dr. Abaru Johnson
                </h2>
                <p className="description2 text-off-white-200 mt-1">Dentist</p>
              </div>
            </div>
            <div className="bg-off-white-200/30 rounded-lg p-4 mt-8 flex items-center justify-between">
              <DateView date="2021-09-10" />
              <div className="flex items-center gap-x-2">
                <ClockIcon />
                <p className="description2 text-tertiary-100 text-xs">10:00</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <h2 className="header2 mt-9">Assigned Doctors</h2>
      <div className="flex flex-col gap-y-6 mt-4">
        {assignedDoctors.length === 0 && !loading && (
          <p className="description2 text-center">
            You have no assigned doctors
          </p>
        )}
        {loading && (
          Array.from({ length: 3 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        )}

        {assignedDoctors?.map((doctor: any) => (
          <div
            key={doctor.id}
            onClick={() =>
              navigate(`/doctor-detail/${doctor.id}`, {
                state: doctor,
              })
            }
          >
            <div className="flex items-center justify-between">
              <DoctorWithRating
                rating={4}
                name={doctor.user?.name}
                specialty={doctor.specialty}
                img_url={doctor3}
              />
              <div className="flex items-center gap-x-2 ml-auto">
                <UserIcon />
                <span className="text-sm">{doctor.visits} visits</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
