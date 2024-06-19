import React from "react";

// Components
import BottomNav from "../components/BottomNav";
import Progress from "../components/Progress";

// Assets
import { ReactComponent as CheckboxActive } from "../assets/icons/checkbox-active.svg";
import { ReactComponent as CheckboxInactive } from "../assets/icons/checkbox-inactive.svg";

const medications = [
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: true,
  },
  {
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: true,
  },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: true,
  },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: false,
  },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: false,
  },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "5 days",
    instructions: "Take after meal",
    completed: false,
  },
];

const Prescriptions = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className="px-6 top-padding bottom-nav-padding">
      <h1 className="header1">Prescriptions</h1>
      <p className="max-w-[262px] text-sm leading-[1.065rem] mt-2">
        Here are your drug prescription from your doctor
      </p>
      <Progress
        centered
        {...{ step, setStep }}
        options={["Current", "Completed"]}
      />

      <div className="flex flex-col gap-y-6 mt-8">
        {medications.filter((item) => item.completed === Boolean(step)).map((medications) => (
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex gap-x-2">
                <span className="">{medications.name}</span>
                <span className="font-semibold">{medications.dosage}</span>
              </div>
              <div className="flex gap-x-1 text-grey-100 text-sm">
                <span className="">{medications.frequency}</span> for
                <span className="">{medications.dosage}</span>
              </div>
              <p className="text-grey-100 text-sm">{medications.instructions}</p>
              <hr className="mt-2" />
            </div>
            {medications.completed ? (
              <CheckboxActive />
            ) : (
              <CheckboxInactive className="mr-3" />
            )}
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Prescriptions;
