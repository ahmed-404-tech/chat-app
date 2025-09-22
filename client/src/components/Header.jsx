import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../components/UserAvatar";

function Header() {
  return (
    <div className=" w-full flex items-center p-4 justify-between drop-shadow-md border-b">
      <Link to={"/home"} className="flex items-center justify-center gap-2">
        <img src="/images/logo.png" alt="logo" width={40} />
        <h2 className="text-lg font-bold">ChatApp</h2>
      </Link>

      <UserAvatar />
    </div>
  );
}

export default Header;
