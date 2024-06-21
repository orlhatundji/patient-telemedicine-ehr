import React, { useState } from "react";

// Components
import BottomNav from "../components/BottomNav";
import Progress from "../components/Progress";

// Assets
import { ReactComponent as CheckboxActive } from "../assets/icons/checkbox-active.svg";
import { ReactComponent as CheckboxInactive } from "../assets/icons/checkbox-inactive.svg";
import EmptyState from "../components/EmptyState";

const Prescriptions = () => {
  const [step, setStep] = useState(0);
  const [medications, setMedication] = useState([
    {
      id: "1",
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
    {
      id: "2",
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
    {
      id: "3",
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
    {
      id: "4",
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
    {
      id: "5",
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
    {
      id: "6",
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      instructions: "Take after meal",
      completed: false,
    },
  ]);

  const markAsComplete = (id: string) => {
    const newMedications = [...medications];
    const index = newMedications.findIndex((item) => item.id === id);
    newMedications[index].completed = true;
    setMedication(newMedications);
  };

  const noCompleted = medications.filter((item) => item.completed).length === 0;

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
        {medications
          .filter((item) => item.completed === Boolean(step))
          .map((medication) => (
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex gap-x-2">
                  <span className="">{medication.name}</span>
                  <span className="font-semibold">{medication.dosage}</span>
                </div>
                <div className="flex gap-x-1 text-grey-100 text-sm">
                  <span className="">{medication.frequency}</span> for
                  <span className="">{medication.dosage}</span>
                </div>
                <p className="text-grey-100 text-sm">
                  {medication.instructions}
                </p>
                <hr className="mt-2" />
              </div>
              {medication.completed ? (
                <CheckboxActive />
              ) : (
                <CheckboxInactive
                  className="mr-3"
                  onClick={() => markAsComplete(medication.id)}
                />
              )}
            </div>
          ))}
        {medications.filter((item) => item.completed === Boolean(step))
          .length === 0 && (
          <EmptyState
            description={
              noCompleted
                ? "No prescription completed"
                : "No prescription available"
            }
            className="mt-20"
          />
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Prescriptions;
