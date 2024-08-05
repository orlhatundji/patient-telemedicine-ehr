import { FunctionComponent, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

// Contexts
import { CallContext } from "../contexts/callContext";

// Assets
import { ReactComponent as VideoIcon } from "../assets/icons/video_lg.svg";
import { ReactComponent as MicIcon } from "../assets/icons/mic.svg";
import { ReactComponent as SpeakerIcon } from "../assets/icons/speaker.svg";
import { ReactComponent as EndCallIcon } from "../assets/icons/endcall.svg";
import { useChatConnection } from "../hooks/useChatConnection";
import { usePeerConnection } from "../hooks/usePeerConnection";

interface Props {
  mediaStream: MediaStream;
}

const VideoFeed: FunctionComponent<Props> = ({ mediaStream }) => {
  const { isCallActive, startCall, endCall } = useContext(CallContext);
  const [isMuted, setIsMuted] = useState(true);

  const { peerConnection, guestStream } = usePeerConnection(mediaStream);
  // console.log("Guest Stream", guestStream, peerConnection.connectionState);
  useChatConnection(peerConnection);
  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 bg-white/90 z-50",
          "flex items-center justify-center text-white"
        )}
      >
        <div className="video-frame relative flex flex-col overflow-hidden h-full">
          <div className="">
            <video
              ref={(ref) => {
                if (ref) {
                  ref.srcObject = mediaStream;
                }
              }}
              autoPlay={true}
              muted={isMuted}
              className="-z-10 w-full h-screen object-cover"
            />
            {guestStream && (
              <video
                ref={(ref) => {
                  if (ref) {
                    ref.srcObject = guestStream;
                  }
                }}
                autoPlay={true}
                muted={isMuted}
                className="absolute right-2 top-1 w-36 border-2 border-white/50"
              />
            )}
          </div>
          {!guestStream && (
            <div className="absolute top-10 left-2 flex-1">
              <div className="z-50">
                <h1 className="header1 text-4xl bg-secondary-200 p-1">
                  Dr. Michael
                </h1>
                <p className="mt-5 italic border-t border-b w-fit p-1 bg-secondary-200">
                  Connecting...
                </p>
              </div>
            </div>
          )}
          <div className="absolute self-center bottom-10 flex justify-center gap-x-8">
            <VideoIcon className="icon-pointer" />
            <MicIcon className="icon-pointer" />
            <SpeakerIcon className="icon-pointer" />
            <EndCallIcon onClick={() => endCall()} className="icon-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFeed;
