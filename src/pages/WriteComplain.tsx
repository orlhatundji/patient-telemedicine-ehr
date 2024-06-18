import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

// Components
import { TextArea } from "../components/Input";
import { Button } from "../components/Button";

// Assets
import { ReactComponent as FileClipIcon } from "../assets/icons/file_clip.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/success_primary.svg";

type FormData = {
  complaint: string;
};

const WriteComplain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();
  const [success, showSuccess] = React.useState(true);
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
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col items-center justify-center h-[100vh] inset-0">
      <div className="blur-sm h-full w-full absolute inset-0 bg-white/50 z-0" />
      <div className="shadow-lg w-[90%] max-w-[340px] bg-white mx-4 p-6 pb-12 rounded10 z-10 border border-stroke-100/20">
        <CloseIcon className="float-right" onClick={() => navigate(-1)}/>
        <SuccessIcon className="mx-auto mt-8 mb-4" />
        <h1 className="font-semibold text-xl text-center">Complaint Sent</h1>
        <p className="text-grey-100 mt-2 text-center text-sm leading-[1rem]">
          You just sent a medical <br />
          complaint to Dr. Abaru
        </p>
      </div>
    </div>
  );
};
