import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { useNavigate } from "react-router-dom";

// Components
import { Button } from "./Button";

const ZoomComponent = () => {
  const navigate = useNavigate();
  var sessionContainer: HTMLElement | null;
  var authEndpoint = `${process.env.REACT_APP_BACKEND_API_URL}/zoom/session`;
  var config = {
    videoSDKJWT: "",
    sessionName: "consultation",
    userName: "telemedicine",
    sessionPasscode: "123",
    features: ["video", "audio", "chat", "raiseHand", "settings"],
  };
  var role = 1;

  function getVideoSDKJWT() {
    sessionContainer = document.getElementById("sessionContainer");
    var joinFlow = document.getElementById("join-flow");
    if (!sessionContainer || !joinFlow) return
    joinFlow.style.display = "none";

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionName: config.sessionName,
        role: role,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.signature) {
          config.videoSDKJWT = data.signature;
          joinSession();
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function joinSession() {
    uitoolkit.joinSession(sessionContainer as HTMLElement, config);

    uitoolkit.onSessionClosed(sessionClosed);
  }

  var sessionClosed = () => {
    uitoolkit.closeSession(sessionContainer as HTMLElement);
    navigate('/appointment');
  };

  return (
    <div className="absolute overflow-auto inset-x-20 inset-y-5 h-full flex flex-col items-center justify-center mx-auto pb-10">
     <div
        id="sessionContainer"
        className="w-full max-h-full"
      ></div>
      <div id="join-flow" className="flex flex-col items-center justify-center">
        <h1 className="mb-10 font-black text-xl">You consultation is starting now</h1>
        <Button onClick={getVideoSDKJWT} title="Join Session" className="w-fit px-10" />
      </div>

      
    </div>
  );
};

export default ZoomComponent;
