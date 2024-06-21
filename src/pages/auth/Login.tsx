import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Constants
import { base_url } from "../../utils/constants";

// Components
import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

const Login: React.FC = () => {
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
          <h1 className="header3 mt-12 w-full">Login</h1>
          <p className="text-sm mt-1">
            Don't have an account?{" "}
            <span
              onClick={() => navigate(`/${base_url}/register`)}
              className="font-bold text-primary"
            >
              Register
            </span>
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
        <div className="mt-4">
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
        </div>
        <span
          className="text-primary mt-2 font-semibold text-[.815rem]"
          onClick={() => navigate(`/${base_url}/forgot-password`)}
        >
          Forgot password
        </span>

        <Button
          title="Login"
          color="primary"
          className="mt-10"
          onClick={() => navigate(`/${base_url}`)}
        />
      </div>
    </div>
  );
};

export default Login;
