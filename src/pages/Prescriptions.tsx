import dayjs from "dayjs";
import { useEffect, useState } from "react";

// Utils
import { axiosInstance } from "../utils/baseAxios";

// Components
import Progress from "../components/Progress";
import BottomNav from "../components/BottomNav";
import EmptyState from "../components/EmptyState";

// Assets
import { ReactComponent as CheckboxActive } from "../assets/icons/checkbox-active.svg";
import { ReactComponent as CheckboxInactive } from "../assets/icons/checkbox-inactive.svg";

type Medication = {
  completed: boolean;
  dosage: string;
  duration: string;
  frequency: string;
  id: number;
  instructions: string;
  name: string;
  startDate: string;
  treatmentId: string;
};

type TreatmentPlan = {
  id: number;
  title: string;
  status: string;
  startDate: Date;
  endDate: Date;
  notes: string;
  medications: Medication[];
};

const Prescriptions = () => {
  const [step, setStep] = useState(0);
  const [treatmentPlans, setTreatmentPlans] = useState<TreatmentPlan[]>([]);

  useEffect(() => {
    const patientId = localStorage.getItem("id");
    axiosInstance
      .get(`/treatmentplan/patient/${patientId}`)
      .then((res) => {
        setTreatmentPlans(res.data);
      })
      .catch(() => {});
  }, []);

  const markAsComplete = (
    id: number,
    treatmentId: number,
    completed: boolean
  ) => {
    const plans = [...treatmentPlans];
    const plansOld = [...treatmentPlans];
    const treatp = [...plans].find((treatment) => treatment.id === treatmentId);
    if (treatp) {
      const medic = treatp.medications.find((med) => med.id === id);
      if (medic) {
        medic.completed = completed;

        setTreatmentPlans([...plans]);
        axiosInstance
          .patch(`/treatmentplan/medication/${id}`, { completed })
          .catch(() => {
            setTreatmentPlans([...plansOld]);
          });
      }
    }
  };

  const stepToStatus = (num: number) => {
    const hs: Record<number, string> = {
      0: "ACTIVE",
      1: "COMPLETED",
    };
    return hs[num];
  };

  return (
    <div className="px-6 top-padding bottom-nav-padding">
      <h1 className="header1">Prescriptions</h1>
      <p className="max-w-[262px] text-base leading-[1.065rem] mt-2">
        Here are your treatment plans
      </p>
      <Progress
        centered
        {...{ step, setStep }}
        options={["ACTIVE", "COMPLETED"]}
      />

      <div className="flex flex-col gap-y-6 mt-8">
        {treatmentPlans
          ?.filter(({ status }) => status === stepToStatus(step))
          .map((treatmentPlan: TreatmentPlan) => {
            return (
              <div>
                <h2 className="font-bold header2 bg-secondary-100 py-2 px-1">{treatmentPlan.title}</h2>
                <div className="bg-secondary-100/70 p-1">
                  <p className="text-sm">Start Date: {dayjs(treatmentPlan.startDate).format('dddd, MMMM D, YYYY')}</p>
                  <p className="text-sm">End Date: {dayjs(treatmentPlan.endDate).format('dddd, MMMM D, YYYY')}</p>
                </div>
                {treatmentPlan.medications.map((medication: Medication) => (
                  <div className="flex items-center justify-between bg-secondary-100/50 p-1">
                    <div className="">
                      <div className="flex gap-x-2">
                        <span className="">{medication.name}</span>
                        <span className="font-semibold">
                          {medication.dosage}
                        </span>
                      </div>
                      <div className="flex gap-x-1 text-grey-100 text-sm">
                        <span className="capitalize">{medication.frequency}</span> for
                        <span className="">{medication.duration}</span>
                      </div>
                      <p className="text-grey-100 text-sm capitalize italic">
                        {medication.instructions}
                      </p>
                      <hr className="mt-2" />
                    </div>
                    {!medication.completed ? (
                      <CheckboxActive
                        onClick={() =>
                          markAsComplete(
                            medication.id,
                            treatmentPlan.id,
                            !medication.completed
                          )
                        }
                      />
                    ) : (
                      <CheckboxInactive
                        className="mr-3"
                        onClick={() =>
                          markAsComplete(
                            medication.id,
                            treatmentPlan.id,
                            !medication.completed
                          )
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            );
          })}

        {treatmentPlans?.filter(({ status }) => status === stepToStatus(step))
          .length === 0 && (
          <EmptyState
            description={
              stepToStatus(step) === "COMPLETED"
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
