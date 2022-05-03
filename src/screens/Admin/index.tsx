import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../components/Auth/Slice";
import { logoutCart } from "../Products/Slice/cartSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.clear;
    dispatch(logout());
    dispatch(logoutCart());
    nav("/");
  };
  return (
    <div>
      <div className="text-3xl font-bold flex flex-col">Admin</div>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Admin;
