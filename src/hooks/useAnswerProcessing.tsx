import { useCallback } from 'react';
 
export function useAnswerProcessing(peerConnection: RTCPeerConnection) {
  const handleOfferAnswer = useCallback(
    ({ answer }: { answer: RTCSessionDescriptionInit }) => {
      // console.log("answer received", peerConnection.connectionState)
      peerConnection?.setRemoteDescription(new RTCSessionDescription(answer));
    },
    [peerConnection],
  );
 
  return {
    handleOfferAnswer,
  };
}