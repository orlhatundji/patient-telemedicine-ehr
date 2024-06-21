// Components
import { useState } from "react";
import BackButton from "../components/BackArrow";
import Dropdown from "../components/Dropdown";
import Multiselect from "../components/MultiSelect";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

const familyConditions = [
  { value: "hypertension", label: "Hypertension" },
  { value: "diabetes", label: "Diabetes" },
  { value: "cancer", label: "Cancer" },
  { value: "asthma", label: "Asthma" },
  { value: "sickle_cell", label: "Sickle Cell" },
];

const allergies = [
  { value: "lactose_intolerant", label: "Lactose Intolerant" },
  { value: "peanuts", label: "Peanuts" },
  { value: "dust", label: "Dust" },
  { value: "mold", label: "Mold" },
  { value: "pet_dander", label: "Pet Dander" },
];

const previous_illness = [
  { value: "malarial", label: "Malaria" },
  { value: "typhoid", label: "Typhoid" },
  { value: "tuberculosis", label: "Tuberculosis" },
  { value: "hepatitis", label: "Hepatitis" },
  { value: "surgery", label: "Surgery" },
];

const MedicalHistoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [hasAllergy, setHasAllergy] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <div className="px-6 top-padding bottom-nav-padding">
      <BackButton />
      <h1 className="header1 mt-3">Medical card</h1>
      <p className="text-sm leading-[1.065rem] mt-1">
        Kindly fill the details below correctly
      </p>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Do you have any allergies?</label>
          <Dropdown
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      {hasAllergy && hasAllergy.value === "yes" && (
        <div className="flex flex-col gap-y-4 mt-6">
          <div className="flex flex-col gap-y-2">
            <label className="leading-[1.2rem]">
              If the above is yes, kindly list them
            </label>
            <Multiselect options={familyConditions} />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">What are your allergies?</label>
          <Multiselect options={allergies} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">
            How often do you consume alcohol?
          </label>
          <Dropdown
            options={[
              { value: "daily", label: "Daily" },
              { value: "casually", label: "Casually" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">
            Can you list the illness you have ever had in the past? (as much as
            you can remember)?
          </label>
          <Multiselect options={previous_illness} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Blood group (if known)</label>
          <Dropdown
            options={[
              { value: "o+", label: "O+" },
              { value: "o-", label: "O-" },
              { value: "a+", label: "A+" },
              { value: "a-", label: "A-" },
              { value: "b+", label: "B+" },
              { value: "b-", label: "B-" },
              { value: "ab+", label: "AB+" },
              { value: "ab-", label: "AB-" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Genotype (if known)</label>
          <Dropdown
            options={[
              { value: "aa", label: "AA" },
              { value: "as", label: "AS" },
              { value: "ss", label: "SS" },
              { value: "ac", label: "AC" },
              { value: "sc", label: "SC" },
              { value: "cc", label: "CC" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <Input
            name="weight"
            type="number"
            label="Current weight (kg)"
            placeholder="Enter weight"
            {...{ register, errors }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <Input
            name="height"
            type="number"
            label="Current height (kg)"
            placeholder="Enter height"
            {...{ register, errors }}
          />
        </div>
      </div>
      <Button
        title="Save"
        color="primary"
        className="mt-10 py-6"
        disabled={!isValid}
        onClick={handleSubmit((data) => {
          console.log(data);
        })}
      />
    </div>
  );
};

export default MedicalHistoryForm;
