import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { useLogoutUserMutation } from "../Slices/userApiSlices";
// import { deleteCredentials } from "../Slices/authSlices";
import { toast } from "react-toastify";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [logoutUser] = useLogoutUserMutation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = async () => {
    try {
      dispatch(deleteCredentials());
      const res = await logoutUser().unwrap();
      toast.success(res.message);
      navigate("/");
    } catch (error) {
      console.error("Error logging out user", error);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50 shadow-lg">
      <div className="flex justify-between p-1 items-center md:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-16 md:h-16 lg:w-16 lg:h-16"
          />

          <h1
            className="px-2 py-2 text-3xl font-medium tracking-wide text-yellow-400
                       border-2 border-blue-100 rounded-md font-"
          >
            Instant Office Fremantle
          </h1>

          {/* <p className="ml-2 text-xl md:text-3xl lg:text-4xl font-bold text-cyan-400">
            Instant<span className="text-violet-700">Office</span>
            <span className="text-red-500">Fremantle</span>
          </p> */}
        </Link>
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="w-8 h-8" />
          ) : (
            <FiMenu className="w-8 h-8" />
          )}
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-12 right-0 w-full bg-gray-50 lg:static lg:w-auto lg:block`}
        >
          <nav className="flex flex-col items-start gap-4 p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-0 ">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/syllabus"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              Syllabus
            </NavLink>
            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              Blog
            </NavLink> */}
            <NavLink
              to="/about-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              About Us
            </NavLink>
            {/* <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              Our Services
            </NavLink> */}

            <NavLink
              to="/contact-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                  : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
              }
            >
              Contact Us
            </NavLink>

            {/* Dashboard link added to the main navigation */}
            {/* {userInfo && (
              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-4 border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                    : "text-gray-700 hover:text-red-600 hover:border-b-4 hover:border-blue-500 pb-2 font-semibold transition duration-300 ease-in-out"
                }
              >
                Dashboard
              </NavLink>
            )} */}

            {/* {userInfo ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="flex gap-1 items-center justify-center focus:outline-none"
                >
                  <h1 className="text-md font-semibold">
                    {userInfo?.loggedInUser?.fullName}
                  </h1>
                  <FaCaretDown />
                </button>
                {dropdownOpen && (
                  <div className="absolute sm:-right-28 md:-right-28 lg:-right-16 top-9 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                    <Link
                      to="/users/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        closeMenu();
                      }}
                    >
                      View Profile
                    </Link>

                    {userInfo && userInfo.loggedInUser.isAdmin && (
                      <>
                        <Link
                          to="/admin/users"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          onClick={() => {
                            setDropdownOpen(false);
                            closeMenu();
                          }}
                        >
                          Users
                        </Link>

                        <Link
                          to="/admin/mcqs"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          onClick={() => {
                            setDropdownOpen(false);
                            closeMenu();
                          }}
                        >
                          MCQS
                        </Link>

                        <Link
                          to="/admin/extra"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          onClick={() => {
                            setDropdownOpen(false);
                            closeMenu();
                          }}
                        >
                          Extra
                        </Link>
                      </>
                    )}
                    <button
                      onClick={() => {
                        logoutHandler();
                        closeMenu();
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
                <Link to="/signin" onClick={closeMenu}>
                  <button className="bg-[#E7EDE7] px-4 py-2 rounded-lg hover:scale-110 font-semibold transition duration-300 ease-in-out">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={closeMenu}>
                  <button className="bg-[#B66053] px-4 py-2 rounded-lg text-white hover:scale-110 font-semibold transition duration-300 ease-in-out">
                    Sign Up
                  </button>
                </Link>
              </div>
            )} */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
