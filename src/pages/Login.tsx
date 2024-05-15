import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box } from "../components/box/box";
import { Button } from "../components/button/button";
import { Input } from "../components/input/input";
import { api } from "../infra/axios";

const Login = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrors({});

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await api
      .post("/auth/login/", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.tokens.access);
        navigate("/profile");
      })
      .catch((error) => {
        if (error.response.status === 401 && error.response.data.detail) {
          toast(error.response.data.detail, { type: "error" });
        }

        if (error.response.status === 400) {
          const formErrors = error.response.data as Record<string, string[]>;

          setErrors(formErrors);
        }
      });
  };

  return (
    <div className="bg-zinc-50 w-full min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <Box>
          <div className="flex justify-center items-center">
            <img src="./logo.svg" className="w-[295px] h-[116px]"></img>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              text="E-mail"
              name="email"
              type="email"
              placeholder="@gmail.com"
              errors={errors.email}
            />

            <Input
              text="Password"
              name="password"
              type="password"
              placeholder="***************"
              errors={errors.password}
            />

            <Button text="Sign In" type="submit" full />
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
