import React from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "../components/Button";
import { TextArea } from "../components/Input";
import ActionStatus from "../components/ActionStatus";

// Assets
import { ReactComponent as FileClipIcon } from "../assets/icons/file_clip.svg";

type FormData = {
  complaint: string;
};

const WriteComplain = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [success, showSuccess] = React.useState(false);
  return (
    <div className="relative px-6 py-8">
      <div className={twMerge(success ? "blur-[1px]" : "")}>
        <h2 className="header2">Write Complaint</h2>
        <TextArea
          name="complaint"
          placeholder="Write your complaint here"
          className="mt-6 h-32"
          {...{ register, errors }}
        />
        <div className="mt-4">
          <span className="text-sm font-semibold">Additional file</span>
          <Button
            title="Choose File"
            className="bg-transparent border border-stroke-100 text-text-primary mt-2 justify-start px-4"
            titleStyle="text-sm ml-1 text-grey-500 font-semibold"
            prefixIcon={<FileClipIcon />}
            onClick={() => {}}
          />
        </div>
      </div>
      {!success ? (
        <div className="fixed bottom-4 inset-x-4">
          <Button
            className=""
            onClick={() => showSuccess(true)}
            title="Write complaint"
          />
        </div>
      ) : (
        <ComplaintSent />
      )}
    </div>
  );
};

export default WriteComplain;

const ComplaintSent = () => {
  return (
    <ActionStatus
      title="Complaint Sent"
      body1="You just sent a medical"
      body2="complaint to Dr. Abaru"
    />
  );
};
