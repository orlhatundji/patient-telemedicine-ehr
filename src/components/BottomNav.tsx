import { Link } from "react-router-dom";

// Assets
import { ReactComponent as HomeActiveIcon } from "../assets/icons/home-active.svg";
import { ReactComponent as HomeInActiveIcon } from "../assets/icons/home-inactive.svg";
import { ReactComponent as CalendarActiveIcon } from "../assets/icons/calendar-active.svg";
import { ReactComponent as CalendarInActiveIcon } from "../assets/icons/calendar-inactive.svg";
import { ReactComponent as ProfileActiveIcon } from "../assets/icons/profile-active.svg";
import { ReactComponent as ProfileInActiveIcon } from "../assets/icons/profile-inactive.svg";
import { ReactComponent as MedicalKitActiveIcon } from "../assets/icons/medical-kit-active.svg";
import { ReactComponent as MedicalKitInActiveIcon } from "../assets/icons/medical-kit-inactive.svg";

type NavItemType = {
  active: JSX.Element;
  inactive: JSX.Element;
  title: string;
  location: string;
};

type NavItemsType = {
  [key: string]: NavItemType;
};

const navItems: NavItemsType = {
  home: {
    active: <HomeActiveIcon />,
    inactive: <HomeInActiveIcon />,
    title: "Home",
    location: "/patient-telemedicine-ehr",
  },
  calendar: {
    active: <CalendarActiveIcon />,
    inactive: <CalendarInActiveIcon />,
    title: "Appointments",
    location: "/patient-telemedicine-ehr/appointments",
  },
  medicalKit: {
    active: <MedicalKitActiveIcon />,
    inactive: <MedicalKitInActiveIcon />,
    title: "Prescription",
    location: "/patient-telemedicine-ehr/prescription",
  },
  profile: {
    active: <ProfileActiveIcon />,
    inactive: <ProfileInActiveIcon />,
    title: "Profile",
    location: "/patient-telemedicine-ehr/profile",
  },
};

const BottomNav = () => {
  const location = window.location.pathname;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-4 px-8 flex justify-between">
      {Object.keys(navItems).map((navItem, index) =>
        navItems[navItem].location === location ? (
          <div
            key={index}
            className="flex flex-col items-center transition-transform delay-75"
          >
            {navItems[navItem].active}
            <p className="text-xs mt-1 text-primary font-semibold">
              {navItems[navItem].title}
            </p>
          </div>
        ) : (
          <Link
            to={navItems[navItem].location}
            key={index}
            className="flex flex-col items-center"
          >
            {navItems[navItem].inactive}
            <p className="text-xs mt-1">{navItems[navItem].title}</p>
          </Link>
        )
      )}
    </div>
  );
};

export default BottomNav;
