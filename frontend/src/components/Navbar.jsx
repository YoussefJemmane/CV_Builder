import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();
  console.log(user);

  const logout = () => {
    
    // remove the user from context
    dispatch({ type: "LOGOUT", payload: null });
    // remove the user from localStorage
    localStorage.removeItem("user");
    
    navigate("/");
  };
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "List Of Resumes", href: "/list", current: false },
    { name: "Create a Resume", href: "/create", current: false },
  ];
  const AuthNavigation = [
    user
      ? { name: "Logout", href: "#", current: false }
      : { name: "Login", href: "/login", current: false },
    user
      ? { name: `${user.email}`, current: false }
      : { name: "Register", href: "/register", current: false },
  ];
  const navLinks = navigation.map((navItem) => (
    <li key={navItem.name}>
      <Link to={navItem.href} className="btn btn-ghost normal-case">
        {navItem.name}
      </Link>
    </li>
  ));
  const AuthNavLinks = AuthNavigation.map((navItem) => (
    <li key={navItem.name}>
      <Link
        to={navItem.href}
        className="btn btn-ghost normal-case"
        onClick={navItem.name === "Logout" ? logout : null}
      >
        {navItem.name}
      </Link>
    </li>
  ));
  return (
    
    <nav  className=""  >
      
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CV Builder</a>
        </div>
        <div className="flex-none">
          <ul className="flex items-center space-x-4">{navLinks} {AuthNavLinks}</ul>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
