import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Constants
import { base_url } from "../../utils/constants";

// Components
import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

const ResetPassword: React.FC = () => {
  const {
    register,
    formState: { errors },
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
          <h1 className="header3 mt-12 w-full">Reset Password</h1>
          <p className="text-sm mt-1">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-primary">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-4">
          <Input
            label="New password"
            name="password"
            type="password"
            placeholder="Enter a secure password"
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
        </div>
        <div className="mt-4">
          <Input
            label="Confirm new password"
            name="password"
            type="password"
            placeholder="Enter a secure password"
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
        </div>

        <Button
          title="Reset password"
          color="primary"
          className="mt-10"
          onClick={() => navigate(`/${base_url}/login`)}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
