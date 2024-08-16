import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Assets
import doctor1 from "../assets/images/doctor1.png";
import { Button } from "../components/Button";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import ActionStatus from "../components/ActionStatus";
import { axiosInstance } from "../utils/baseAxios";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleMeeting = () => {
  const location = useLocation();
  const { id, name, specialty } = location.state;
  const [date, onDateChange] = useState<Value>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [page, setPage] = useState<"date" | "time">("date");
  const [scheduleSuccess, setScheduleSuccess] = useState(false);

  const handleDateClick = (date: Value) => {
    setPage("time");
    onDateChange(date);
  };
  const convertTo24HourFormat = (
    time: string
  ): { hour: number; minute: number } => {
    const [hour, minute] = time.split(" ")[0].split(":");
    return {
      hour: parseInt(hour),
      minute: parseInt(minute),
    };
  };
  const handleTimeClick = (t: string, i: number) => {
    if (avSet.has(t)) return;
    setTime(t);
    const { hour, minute } = convertTo24HourFormat(t);
    const dt = dayjs(date as Date)
      .set("hour", hour)
      .set("minute", minute)
      .toDate();
    onDateChange(dt);
  };
  const [availableTimes] = useState([
    { label: "8:00 AM", value: "8:00 AM" },
    { label: "8:30 AM", value: "8:30 AM" },
    { label: "9:00 AM", value: "9:00 AM" },
    { label: "9:30 AM", value: "9:30 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "10:30 AM", value: "10:30 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "11:30 AM", value: "11:30 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "12:30 PM", value: "12:30 PM" },
    { label: "1:00 PM", value: "13:00" },
    { label: "1:30 PM", value: "13:30 PM" },
    { label: "2:00 PM", value: "14:00 PM" },
    { label: "2:30 PM", value: "14:30 PM" },
    { label: "3:00 PM", value: "15:00 PM" },
    { label: "3:30 PM", value: "15:30 PM" },
  ]);

  const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
  const [avSet, setAvSet] = useState(new Set());
  useEffect(() => {
    const temp = new Set();
    unavailableTimes.forEach((apptm: any) => {
      const time = dayjs(apptm.date).format("h:mm A");
      temp.add(time);
    });
    setAvSet(temp);
  }, [unavailableTimes]);
  const handleScheduleSubmit = async () => {
    await axiosInstance.post("/appointment", {
      date, 
      doctorId: id
    }).then(() => {
      setScheduleSuccess(true);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    axiosInstance
      .post("/appointment/day/doctor", {
        doctorId: id,
        date,
      })
      .then((res) => {
        setUnavailableTimes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } , [date, id]);
  
  return (
    <>
      <div
        className={twMerge(
          "grid place-content-center py-12 px-4",
          scheduleSuccess && "blur-sm"
        )}
      >
        <h1 className="text-2xl mb-6 font-bold">
          Select a date and time to <br /> meet with the doctor
        </h1>
        <div className="relative flex overflow-x-hidden">
          <Calendar
            onChange={handleDateClick}
            value={date}
            className={twMerge(
              "text-xl border-white transition-all duration-500 rounded-lg",
              page === "time" ? "-translate-x-[110%]" : ""
            )}
          />
          <div
            className={twMerge(
              "absolute w-full transition-all duration-500 ",
              page === "date" ? "translate-x-[100%]" : "translate-x-0"
            )}
          >
            <div className="text-sm">
              <p className="">In your local time zone (Africa/Lagos)</p>
              <p className="text-base mt-2">
                {dayjs(date as Date).format("dddd, MMMM D, YYYY")}{" "}
                <span
                  className="font-black ml-3"
                  onClick={() => setPage("date")}
                >
                  Change
                </span>
              </p>
              <div className="grid grid-cols-4 gap-x-2 gap-y-4 mt-8">
                {availableTimes.map((t, i) => (
                  <button
                    key={t.value}
                    className={twMerge(
                      "border rounded-lg py-2 text-center cursor-pointer transition-all duration-300",
                      " border-primary whitespace-nowrap",
                      t.value === time ? "bg-primary/10 font-black" : "",
                      avSet.has(t.label) ? "bg-black/10 font-black" : ""
                    )}
                    onClick={() => handleTimeClick(t.value, i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Button
          title={page === "date" ? "Continue" : "Book Appointment"}
          className={twMerge(page === "date" ? "my-4" : "mb-4")}
          onClick={() => {
            if (page === "time" && time) {
              handleScheduleSubmit();
            }
          }}
        />
        <div className="border p-4 rounded-lg">
          <div className="flex gap-x-4 items-center ">
            <img src={doctor1} alt="doctor" className="max-w-[55px]" />
            <div className="">
              <h2 className="header2">{name}</h2>
              <p className="description2 text-grey-200 mt-1">{specialty}</p>
            </div>
          </div>
          <hr className="mt-4" />
          <h2 className="header2 mt-4">Doctor's Appointment</h2>
          <h5 className="mt-2 text-grey-200">Session duration</h5>
          <p>30 minutes</p>
        </div>
      </div>
      {scheduleSuccess && (
        <AppointmentScheduleSuccess
          date={dayjs(date as Date).format("dddd, MMMM D, YYYY")}
        />
      )}
    </>
  );
};

export default ScheduleMeeting;

const AppointmentScheduleSuccess = ({ date }: { date: string }) => {
  return (
    <ActionStatus
      title="Appointment Scheduled"
      body1="Meeting with Dr. Kelly Johnson"
      body2={`on ${date}`}
    />
  );
};
