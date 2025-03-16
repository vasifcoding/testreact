import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../routes";

function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTrue, setMobileTrue] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              onClick={() => setMobileTrue(!mobileTrue)}
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={
              mobileTrue
                ? "  w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 px-3 md:p-6 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to={ROUTES.HOME}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-700 block py-2 px-2 hover:text-gray-900 hover:bg-white text-gray-900 rounded-sm  md:border-0  md:p-2 dark:text-white "
                      : "block py-2 px-2 transition-all text-gray-900 rounded-sm hover:text-gray-900 hover:bg-white md:border-0  md:p-2 dark:text-white "
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ABOUT}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-700 block py-2 px-2 hover:text-gray-900 hover:bg-white text-gray-900 rounded-sm  md:border-0  md:p-2 dark:text-white "
                      : "block py-2 px-2 hover:text-gray-900 hover:bg-white text-gray-900 rounded-sm  md:border-0  md:p-2 dark:text-white "
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.SERVICES}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-700 block py-2 px-2 hover:text-gray-900 hover:bg-white text-gray-900 rounded-sm  md:border-0  md:p-2 dark:text-white "
                      : "block py-2 px-2 hover:text-gray-900 hover:bg-white text-gray-900 rounded-sm  md:border-0  md:p-2 dark:text-white "
                  }
                >
                  Services
                </NavLink>
              </li>
              {/* Dropdown Menü */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center hover:text-gray-900 hover:bg-white justify-between hover:cursor-pointer w-full py-2 px-3 text-white rounded-sm "
                >
                  Dropdown
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Aç/Kapa Durumuna Göre Görünürlük */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <Link
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                          to={ROUTES.WEBSERVICE}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Web Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                          to={ROUTES.MOBILESERVICE}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mobile Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                          to={ROUTES.DESKTOPSERVICE}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Desktop Services
                        </Link>
                      </li>
                    </ul>
                    {/* <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </div> */}
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to={ROUTES.BLOGS}
                  className="block py-2 px-3 text-white p-2 rounded-sm hover:bg-gray-100 hover:text-gray-900"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
