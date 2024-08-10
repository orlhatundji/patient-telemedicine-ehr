/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
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
import { useLocalCameraStream } from "../hooks/useLocalCameraStream";

const VideoFeed = () => {
  const { endCall } = useContext(CallContext);
  const [isGuestPlaying, setIsGuestPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { localStream, endLocalStream } = useLocalCameraStream();
  const { peerConnection, guestStream } = usePeerConnection(localStream);
  useChatConnection(peerConnection);
  useEffect(() => {
    return () => {
      if (peerConnection.connectionState === "connected") {
        peerConnection.close();
      }
      endLocalStream();
    };
  }, []);

  const handleEndCall = async () => {
    await peerConnection.close();
    endCall();
    endLocalStream();
  };
  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 bg-white/90 z-50",
          "flex items-center justify-center text-white"
        )}
      >
        <div
          className={twMerge(
            "video-frame relative flex flex-col overflow-hidden h-full",
            isGuestPlaying ? "" : "bg-black"
          )}
        >
          <div className="">
            <video
              ref={(ref) => {
                if (ref) {
                  ref.srcObject = guestStream;
                }
              }}
              onPlaying={() => setIsGuestPlaying(true)}
              autoPlay={true}
              muted={isMuted}
              className="-z-10 w-full h-screen object-cover"
            />
            {guestStream && (
              <video
                ref={(ref) => {
                  if (ref) {
                    ref.srcObject = localStream;
                  }
                }}
                autoPlay={true}
                muted={isMuted}
                className="absolute right-2 top-1 w-36 border-2 border-white/50"
              />
            )}
          </div>
          <div
            className={twMerge("absolute top-10 p-11 flex-1", isGuestPlaying && "opacity-0")}
          >
            <div className="z-50">
              <h1 className="header1 text-4xl">Michael Akinsola</h1>
              <p className="">Educator</p>
              <p className="mt-5 italic border-t border-b w-fit">
                {!guestStream ? "Calling..." : "Connecting..."}
              </p>
            </div>
          </div>
          <div className="absolute self-center bottom-10 flex justify-center gap-x-8">
            <VideoIcon className="icon-pointer" />
            <MicIcon
              className={twMerge(
                "icon-pointer",
                isMuted && "border rounded-full"
              )}
              onClick={() => setIsMuted((prev) => !prev)}
            />
            <SpeakerIcon className="icon-pointer" />
            <EndCallIcon
              onClick={() => handleEndCall()}
              className="icon-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFeed;
