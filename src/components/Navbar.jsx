import React from "react";
import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";

function Navbar() {
  const { user } = useStore();

  return (
    <div className="h-1/4 flex items-center">
      <img
        src="/images/logo.png"
        alt="MangoJelly-Logo"
        className="w-32 h-32 rounded-full"
      />
      <span
        className="ml-4 text-2xl font-bold text-gray-700"
        style={{ fontFamily: "cursive" }}
      >
        Welcome to Mango-Jelly, <span className="text-prim">@</span>
        {user.name}
      </span>
      <Link to={"/item/new"} className="button ml-auto">
        + &nbsp;New Mobile
      </Link>
    </div>
  );
}

export default Navbar;
