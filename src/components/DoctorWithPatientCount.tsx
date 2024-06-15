import React from "react";

// Components
import Ratings from "./Ratings";

// Assets

type DoctorWithPatientCountProps = {
  rating: number;
  name: string;
  specialty: string;
  img_url: string;
  patientsCount?: number;
};

const DoctorWithRating: React.FC<DoctorWithPatientCountProps> = ({
  rating,
  name,
  specialty,
  img_url,
  patientsCount,
}) => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src={img_url} alt="doctor" className="max-w-[74px]" />
      <div className="flex flex-col justify-center">
        <h2 className="header2 text-base">{name}</h2>
        <p className="description2 text-sms my-1">
          {specialty}
        </p>
        {patientsCount ? (
          <span className="text-grey-200 text-xs">
            {patientsCount} patient{`${patientsCount > 1 ? "s" : ""}`}
          </span>
        ) : (
          <Ratings rating={rating} />
        )}
      </div>
    </div>
  );
};

export default DoctorWithRating;
