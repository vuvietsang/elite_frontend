import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutCart } from "../../screens/Products/Slice/cartSlice";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { logout } from "../Auth/Slice";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleClose = () => {
    setOpenLogin(false);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const onOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };
  const onOpenLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };
  const avatar = useSelector((state: any) => state.auth.avatar);
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const cartCounter = useSelector((state: any) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 fixed w-full top-0 overflow-hidden z-50 border-b shadow-sm ">
      <a className="text-decoration-none d-block d-lg-none">
        <h1 className="m-0 display-5 font-weight-semi-bold">
          <span className="text-primary font-weight-bold border px-3 mr-1">
            E
          </span>
          Shopper
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between py-3"
        id="navbarCollapse"
      >
        <div className="flex flex-row w-full justify-center ml-20 items-center">
          <Link to={"/"} className="nav-item nav-link">
            Home
          </Link>
          <Link to={"/products"} className="nav-item nav-link">
            Products
          </Link>
          <Link to={"/checkout"} className="nav-item nav-link">
            Checkout
          </Link>
          <Link to={"/contact"} className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <div className="navbar-nav ml-auto py-0 px-3 flex  items-center space-x-3">
          <Link to="/cart" role="button" className="relative mt-2 flex">
            <svg className="flex-1 w-8 h-8 fill-current">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            {cartCounter > 0 && (
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartCounter}
              </span>
            )}
          </Link>
          {avatar && isAuth ? (
            <div className="flex flex-row space-x-2 px-10">
              <img
                src={avatar}
                className="rounded-full object-cover h-10 w-10"
              />
              <button
                className="hover:bg-gray-400 py-1 px-3 rounded-md border-2"
                onClick={() => {
                  localStorage.clear();
                  dispatch(logout());
                  dispatch(logoutCart());
                  nav("/");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="hover:bg-gray-400 py-1 px-4 rounded-md border-2"
              onClick={() => setOpenLogin(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <Dialog open={openLogin}>
        <Login onOpenRegister={onOpenRegister} onCancel={handleClose} />
      </Dialog>
      <Dialog open={openRegister}>
        <Register
          onOpenLogin={onOpenLogin}
          handleCloseRegister={handleCloseRegister}
        />
      </Dialog>
    </nav>
  );
};

export default Header;
