import React from "react";
import { Link, useLocation } from "react-router-dom";

function BottomTabBar() {
    const location = useLocation();

    const isSearchPage = location.pathname === "/search"
  return (
    <div className="bg-bg drop-shadow-lg w-96 h-16 fixed bottom-2 self-center rounded-full flex justify-evenly items-center">
      <Link to="/home" className="flex flex-col justify-center items-center">
        <img src="/images/icons/home.gif" alt="" width={40}/>
      </Link>
      <Link to="/search" className={`flex justify-center items-center bg-accent flex-row w-32 gap-2 h-12 rounded-full`}>
        <img src="/images/icons/search.gif" alt="" width={40}/>
        <h2 className="text-white">Search</h2>
      </Link>
      <Link to="/home" className="flex flex-col justify-center items-center">
        <img src="/images/icons/user.gif" alt="" width={40}/>
      </Link>
    </div>
  );
}

export default BottomTabBar;
