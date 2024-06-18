import React from "react";
import { twMerge } from "tailwind-merge";

type ProgressProps = {
  step: number;
  setStep: (step: number) => void;
  options: string[];
};

const Progress: React.FC<ProgressProps> = ({ step, setStep, options }) => {
  return (
    <div
      className={twMerge(
        "relative w-full min-h-[52px] grid h-full bg-white",
        "h-11 rounded10 translate-x-0 mt-8"
      )}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className={twMerge(
          "absolute transition-transform duration-500 h-full bg-primary rounded10"
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translate(${100 * step}%)`,
        }}
      />
      {options.map((option, i) => (
        <div
          key={option}
          onClick={() => setStep(i)}
          className={twMerge(
            "h-full flex items-center gap-x-2 px-4 py-3",
            "cursor-pointer rounded10 transition-all duration-1000",
            step === i ? "bg-primary/50" : "bg-white"
          )}
        >
          <span className={twMerge("z-10", step === i ? "text-white" : "", "header2")}>
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ProgressA: React.FC<ProgressProps> = ({ step, setStep, options }) => {
  return (
    <div
      className={twMerge(
        "relative w-full min-h-[52px] grid h-full bg-white",
        "h-11 translate-x-0 mt-8"
      )}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className={twMerge(
          "absolute transition-transform duration-500 h-full border-b-2 border-tertiary-100",
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translate(${100 * step}%)`,
        }}
      />
      {options.map((option, i) => (
        <div
          key={option}
          onClick={() => setStep(i)}
          className={twMerge(
            "h-full flex items-center gap-x-2 px-4 py-3",
            "cursor-pointer transition-all duration-1000",
          
          )}
        >
          <span className={twMerge("z-10", step === i ? "" : "text-grey-200", "header2 text-base")}>
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Progress;
