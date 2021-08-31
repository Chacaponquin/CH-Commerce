import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import LoadingContext from "../context/LoadingContext";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const { setLoading } = useContext(LoadingContext);

  const getProfile = async () => {
    setLoading(true);
    let profileLogin = localStorage.getItem("profile");

    if (profileLogin) {
      profileLogin = JSON.parse(profileLogin);

      let { data } = await axios.get(
        `${process.env.API_URL}/confirmProfile/${profileLogin.id}`
      );

      setProfile(data.message);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const data = { profile, setProfile };

  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};

export { ProfileProvider };
export default ProfileContext;
