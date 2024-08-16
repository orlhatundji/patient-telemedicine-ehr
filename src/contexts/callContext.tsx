import React, { createContext, useContext, useState } from 'react';

interface CallContextType {
  isCallActive: boolean;
  startCall: () => void;
  endCall: () => void;
  children?: React.ReactNode;
}

// Create the call context
export const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallContextProvider: React.FC<CallContextType> = ({ children }) => {
  const [isCallActive, setIsCallActive] = useState(false);

  // Function to start the call
  const startCall = () => {
    setIsCallActive(true);
  };

  // Function to end the call
  const endCall = () => {
    setIsCallActive(false);
  };

  return (
    <CallContext.Provider value={{ isCallActive, startCall, endCall }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCallContext = () => {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};