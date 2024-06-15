import { twMerge } from "tailwind-merge";

// Components
import { Button } from "../components/Button";
import DoctorWithRating from "../components/DoctorWithRating";

// Assets
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as ClockIcon } from "../assets/icons/time.svg";
import doctor1 from "../assets/images/doctor1.png";
import doctor2 from "../assets/images/doctor2.png";
import doctor3 from "../assets/images/doctor3.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-8">
      <div className="flex justify-between">
        <div className="">
          <span className="description1">Good morning, Simon</span>
          <h1 className="header1 mt-1">Stay Healthy</h1>
        </div>
        <div className="relative mt-2">
          <NotificationIcon
            onClick={() => navigate("patient-telemedicine-ehr/login")}
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
      <Link to="/patient-telemedicine-ehr/upcoming-appointments">
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
              <div className="flex items-center gap-x-2">
                <CalendarIcon />
                <p className="description2 text-tertiary-100 text-xs">
                  12th July, 2021
                </p>
              </div>
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
        <DoctorWithRating
          rating={4}
          name="Dr. Abaru Johnson"
          specialty="Dentist"
          visits={3}
          img_url={doctor3}
        />
        <DoctorWithRating
          rating={4}
          name="Dr. Ikegwu Emmanuel"
          specialty="Dentist"
          visits={6}
          img_url={doctor2}
        />
        <DoctorWithRating
          rating={5}
          name="Dr. Ayena Samuel"
          specialty="Othorpedic Surgeon"
          visits={13}
          img_url={doctor1}
        />
      </div>
    </div>
  );
};

export default Home;
