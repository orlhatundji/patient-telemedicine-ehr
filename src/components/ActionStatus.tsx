import { useNavigate } from "react-router-dom";

// Assets
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/success_primary.svg";

type ActionStatusProps = {
  title: string;
  body1: string;
  body2: string;
};

const ActionStatus = ({ title, body1, body2 }: ActionStatusProps) => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col items-center justify-center h-[100vh] inset-0">
      <div className="blur-sm h-full w-full absolute inset-0 bg-white/50 z-0" />
      <div className="shadow-lg w-[90%] max-w-[340px] bg-white mx-4 p-6 pb-12 rounded10 z-10 border border-stroke-100/20">
        <CloseIcon className="float-right" onClick={() => navigate(-1)}/>
        <SuccessIcon className="mx-auto mt-8 mb-4" />
        <h1 className="font-semibold text-xl text-center">{title}</h1>
        <p className="text-grey-100 mt-2 text-center text-sm leading-[1rem]">
          {body1} <br />
          {body2}
        </p>
      </div>
    </div>
  );
};

export default ActionStatus;