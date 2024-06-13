import React from "react";

// Constants
import { base_url } from "../../utils/constants";

// Components
import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";

// Assets
import { ReactComponent as SuccessPrimary } from "../../assets/icons/success-primary.svg";
import { useNavigate } from "react-router-dom";

const ResetLinkSent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <AuthHeader />
      <div className="px-6 flex-1 flex flex-col items-center justify-center">
        <div className="mb-6">
          <SuccessPrimary className="mx-auto"/>
          <p className="text-center text-sm mt-4">
          Your password reset link has <br /> been sent to *******jik@gmail.com
          </p>
        <Button title="Open email" color="primary" className="mt-10" onClick={() => navigate(`/${base_url}/reset-password`)} />
        </div>
      
    

      </div>
    </div>
  );
};

export default ResetLinkSent;
