import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Assets
import doctor1 from "../assets/images/doctor1.png";
import { Button } from "../components/Button";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import ActionStatus from "../components/ActionStatus";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleMeeting = () => {
  // const navigate = useNavigate();
  const [value, onChange] = useState<Value>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [page, setPage] = useState<"date" | "time">("date");
  const [scheduleSuccess, setScheduleSuccess] = useState(false);
  // const ere = [
  //   {
  //     id: 1,
  //     title: "Meeting",
  //     person: { name: "Gbenga Akintubi" },
  //     agenda:
  //       "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
  //     start: new Date(2024, 6, 1, 10, 0), // July 1, 2024, 10:00 AM
  //     end: new Date(2024, 6, 1, 12, 0), // July 1, 2024, 12:00 PM
  //   },
  // ];
  const handleDateClick = (date: Value) => {
    setPage("time");
    onChange(date);
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
    const date = dayjs(value as Date)
      .set("hour", hour)
      .set("minute", minute)
      .toDate();
    onChange(date);
  };
  const [availableTimes] = useState([
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]);

  const unavailableTimes = [
    "Sat Aug 10 2024 09:30:00 GMT+0100",
    "Sat Aug 10 2024 10:00:00 GMT+0100",
    "Sat Aug 10 2024 14:30:00 GMT+0100",
  ];
  const [avSet, setAvSet] = useState(new Set());
  useEffect(() => {
    const temp = new Set();
    unavailableTimes.forEach((t) => {
      const time = dayjs(t).format("h:mm A");
      temp.add(time);
    });
    setAvSet(temp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            value={value}
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
                {dayjs(value as Date).format("dddd, MMMM D, YYYY")}{" "}
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
                    key={t}
                    className={twMerge(
                      "border rounded-lg py-2 text-center cursor-pointer transition-all duration-300",
                      " border-primary whitespace-nowrap",
                      t === time ? "bg-primary/10 font-black" : "",
                      avSet.has(t) ? "bg-black/10 font-black" : ""
                    )}
                    onClick={() => handleTimeClick(t, i)}
                  >
                    {t}
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
              setScheduleSuccess(true);
            }
          }}
        />
        <div className="border p-4 rounded-lg">
          <div className="flex gap-x-4 items-center ">
            <img src={doctor1} alt="doctor" className="max-w-[55px]" />
            <div className="">
              <h2 className="header2">Dr. Abaru Johnson</h2>
              <p className="description2 text-grey-200 mt-1">Optician</p>
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
          date={dayjs(value as Date).format("dddd, MMMM D, YYYY")}
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
