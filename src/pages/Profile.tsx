import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../components/box/box";
import { Input } from "../components/input/input";
import Navbar from "../components/navbar/navbar";
import { api } from "../infra/axios";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: null;
    type: string;
    created: Date;
    modified: Date;
    role: string;
  }>();

  const getUserProfile = useCallback(async () => {
    const response = await api.get("/auth/profile/");

    setUser(response.data);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }

    getUserProfile();
  }, [getUserProfile, navigate]);

  return (
    <div className="bg-slate-100 w-full min-h-screen flex flex-col">
      <Navbar />

      {user && (
        <div className="self-center mt-24">
          <Box>
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl mb-3">Profile Picture</span>
              <img
                src="https://avatars.githubusercontent.com/mauriciosts"
                className="w-[100px] h-[100px] rounded-lg"
              ></img>
            </div>

            <Input
              disabled
              text=" Your Name"
              name="name"
              type="text"
              value={user.name}
            />

            <Input
              disabled
              text="Your E-mail"
              name="name"
              type="text"
              value={user.email}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Profile;
