import { useNavigate } from "react-router-dom";

// Assets
import { ReactComponent as CallAcceptIcon } from "../assets/icons/call-accept-btn.svg";
import { ReactComponent as CallMuteIcon } from "../assets/icons/call-mute-btn.svg";
import { ReactComponent as CallEndIcon } from "../assets/icons/call-end-btn.svg";
import { ReactComponent as CallSpeakerIcon } from "../assets/icons/call-speaker-btn.svg";
import callBg from "../assets/images/call-bg.png";
import person from "../assets/images/person.png";

const CallScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="relative px-6 py-8 h-screen flex flex-col">
      <img src={callBg} alt="" className="absolute inset-0 -z-10 blur-sm" />

      <div className="flex-1">
        <h1 className="header1 mt-9 text-white">Dr. Abaru Johnson</h1>
        <span className="text-lg text-white">Dentist</span>
      </div>
      <img src={person} alt="" className="w-28 mb-10" />
      <div className="flex justify-between max-w-[320px] w-full self-center">
        <CallAcceptIcon className="cursor-pointer hover:scale-[1.2] transition-transform" />
        <CallMuteIcon className="cursor-pointer hover:scale-[1.2] transition-transform" />
        <CallSpeakerIcon className="cursor-pointer hover:scale-[1.2] transition-transform" />
        <CallEndIcon
          className="cursor-pointer hover:scale-[1.2] transition-transform"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default CallScreen;
