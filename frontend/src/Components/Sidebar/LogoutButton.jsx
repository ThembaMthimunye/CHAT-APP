import React from "react";
import useLogout from "../../hooks/useLogOut.js";
import { IoIosLogOut } from "react-icons/io";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <button
      onClick={logout}
      disabled={loading}
      className={` mx-4 text-4xl text-white cursor-pointer my-4  hover:bg-sky-300 hover:rounded-full p-1 ${
        loading ? "bg-sky-300 rounded-lg text-sm" : "bg-transparent"
      }`}
    >
      {loading ? "Logging out..." : <IoIosLogOut />}
    </button>
  );
};

export default LogoutButton;
