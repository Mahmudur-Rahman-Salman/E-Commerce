import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-base-100 shadow-sm px-4 py-2 md:px-10 fixed w-full z-50">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a className="text-xl font-bold">E-Commerce</a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1  max-w-4xl  mx-4 hidden md:flex">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered outline-none w-full"
            />
          </div>

          {/* Right: Cart + Profile */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button className="btn btn-ghost btn-circle relative">
              <FiShoppingCart className="text-xl" />
              <span className="badge badge-xs badge-primary absolute -top-1 -right-1">
                3
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn btn-ghost btn-circle"
              >
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://i.ibb.co/VTqw5rY/img-container.png"
                      alt="User"
                    />
                  </div>
                </div>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-md rounded-md py-2">
                  <li>
                    <Link className="px-4 py-2 hover:bg-gray-100">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 hover:bg-gray-100">Profile</Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 hover:bg-gray-100">Logout</Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 hover:bg-gray-100">Sign In</Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile menu toggle */}
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
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100 rounded">
                  My Orders
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Profile
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Logout
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className=" flex flex-wrap p-3 flex-col md:flex-row items-center justify-center">
          <nav className="flex flex-wrap items-center text-base  justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/allproducts" className="mr-5 hover:text-gray-900">
              All Products
            </Link>
            <Link to="/category" className="mr-5 hover:text-gray-900">
              Category
            </Link>
            <Link to="/" className="hover:text-gray-900">
              Signup
            </Link>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
