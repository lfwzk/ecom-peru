import React from "react";
import logo from "../components/images/icons/logo.png";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/product">Productos</a>
              </li>
              <li>
                <a href="/laptop">Laptops</a>
              </li>
              <li>
                <a href="/computer">Computadoras</a>
              </li>
              <li>
                <a href="/accesories">Accesorios</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-auto sm:w-20 lg:w-20 "
            />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a href="/product">Productos</a>
            </li>
            <li>
              <a href="/computer">Computadoras</a>
            </li>
            <li>
              <a href="/laptop">Laptops</a>
            </li>
            <li>
              <a href="/accesories"> Accesorios </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-red-500 text-white text-center py-2  ">
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          <div className="mx-auto max-w-screen-lg flex flex-col lg:flex-row justify-between items-center">
            <p className="text-sm lg:text-base mr-4 ">
              Correo: ejemplo@correo.com
            </p>
            <p className="text-sm lg:text-base mr-4">Teléfono: +123 456 789</p>
          </div>
        </div>
      </div>
    </>
  );
};
