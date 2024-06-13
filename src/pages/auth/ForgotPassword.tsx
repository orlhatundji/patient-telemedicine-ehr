import React from "react";
import { useForm } from "react-hook-form";

// Constants
import { base_url } from "../../utils/constants";

// Components
import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <AuthHeader />
      <div className="px-6">
        <div className="mb-6">
          <h1 className="header3 mt-12 w-full">ForgotPassword</h1>
          <p className="text-sm mt-1">
            Don’t worry, Provide your email for the <br /> password reset link.
          </p>
        </div>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          {...{ register, errors }}
          rules={{
            required: true,
          }}
        />

        <Button
          title="Send reset link"
          color="primary"
          className="mt-10"
          onClick={() => navigate(`/${base_url}/reset-link-sent`)}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
