import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // LOGOUT HANDLER
  const handleLogout = async () => {
    try {
      await logout();

      await Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been logged out successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Something went wrong. Try again.",
      });
    }
  };
  return (
    <>
      <nav className="bg-base-100 shadow-sm px-4 py-2 md:px-10 fixed w-full z-50">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              E-Commerce
            </Link>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-4xl mx-4 hidden md:flex">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered outline-none w-full"
            />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button className="btn btn-ghost btn-circle relative">
              <FiShoppingCart className="text-xl" />
              <span className="badge badge-xs badge-primary absolute -top-1 -right-1">
                3
              </span>
            </button>

            {/* Profile + Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn btn-ghost btn-circle"
              >
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/VTqw5rY/img-container.png"
                      }
                      alt="User"
                    />
                  </div>
                </div>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-3 w-48 bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200 rounded-xl py-3 z-50 animate-dropdown">
                  {user ? (
                    <>
                      <li>
                        <Link className="block px-4 py-2 hover:bg-gray-100 hover:pl-5 transition-all duration-200 text-gray-700 font-medium">
                          My Orders
                        </Link>
                      </li>

                      <li>
                        <Link className="block px-4 py-2 hover:bg-gray-100 hover:pl-5 transition-all duration-200 text-gray-700 font-medium">
                          Profile
                        </Link>
                      </li>

                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-red-100 hover:pl-5 transition-all duration-200 text-red-600 font-semibold"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-100 hover:pl-5 transition-all duration-200 text-gray-700 font-medium"
                      >
                        Sign In
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost md:hidden btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-base-100 shadow-md rounded-md p-4">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full mb-2"
            />

            <ul className="flex flex-col gap-2">
              {user ? (
                <>
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100 rounded">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100 rounded">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap p-3 flex-col md:flex-row items-center justify-center">
          <nav className="flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/allproducts" className="mr-5 hover:text-gray-900">
              All Products
            </Link>
            <Link to="/category" className="mr-5 hover:text-gray-900">
              Category
            </Link>
            <Link to="/addProducts" className="mr-5 hover:text-gray-900">
              AddProducts
            </Link>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
