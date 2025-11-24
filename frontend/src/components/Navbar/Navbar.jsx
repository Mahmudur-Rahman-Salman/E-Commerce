// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";

// const Navbar = () => {
//   const navigate = useNavigate();

//   // DEMO: replace with real auth later
//   //   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartCount, setCartCount] = useState(3);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   //   const handleSearch = (e) => {
//   //     e.preventDefault();
//   //     if (!searchQuery.trim()) return;
//   //     navigate(`/search?q=${searchQuery}`);
//   //     setSearchQuery("");
//   //   };

//   //   const logout = () => {
//   //     setIsLoggedIn(false);
//   //     navigate("/signin");
//   //   };

//   return (
//     <>
//       <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           {/* Left: Logo */}
//           <Link to="/" className="text-2xl font-bold text-primary">
//             E-Commerce
//           </Link>

//           {/* Middle: Search bar (desktop) */}
//           <form className="hidden md:flex w-1/2 mx-6">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="input input-bordered w-full bg-gray-50"
//               value={searchQuery}
//             //   onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </form>

//           {/* Right side (desktop) */}
//           <div className="hidden md:flex items-center gap-6">
//             {/* Cart Icon */}
//             <Link to="/cart" className="relative">
//               <FiShoppingCart size={25} />
//               {cartCount > 0 && (
//                 <span className="badge badge-primary badge-sm absolute -top-2 -right-3">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Profile dropdown */}
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full bg-gray-300 flex items-center justify-center">
//                   <FiUser size={20} />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
//               >
//                 {/* {isLoggedIn ? (
//                   <>
//                     <li>
//                       <Link to="/my-orders">My Orders</Link>
//                     </li>
//                     <li>
//                       <Link to="/profile">Profile</Link>
//                     </li>
//                     <li>
//                       <button onClick={logout}>Logout</button>
//                     </li>
//                   </>
//                 ) : (
//                   <li>
//                     <Link to="/signin">Sign In</Link>
//                   </li>
//                 )} */}
//                 <li>
//                   <Link to="/my-orders">My Orders</Link>
//                 </li>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button className="md:hidden" onClick={() => setMobileOpen(true)}>
//             <FiMenu size={26} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setMobileOpen(false)} // CLICK ANYWHERE OUTSIDE → CLOSE
//         >
//           {/* Drawer */}
//           <div
//             className="absolute top-0 left-0 w-72 h-full bg-white p-5 shadow-lg"
//             onClick={(e) => e.stopPropagation()} // PREVENT CLOSING WHEN CLICK INSIDE
//           >
//             {/* Close button */}
//             <button
//               onClick={() => setMobileOpen(false)}
//               className="absolute top-4 right-4"
//             >
//               <FiX size={24} />
//             </button>

//             {/* Mobile search bar */}
//             <form onSubmit={handleSearch} className="mt-10">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="input input-bordered w-full bg-gray-50"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </form>

//             {/* Menu Items */}
//             <ul className="mt-6 space-y-4 text-lg font-medium">
//               <li>
//                 <Link to="/cart" onClick={() => setMobileOpen(false)}>
//                   Cart ({cartCount})
//                 </Link>
//               </li>

//               {isLoggedIn ? (
//                 <>
//                   <li>
//                     <Link to="/my-orders" onClick={() => setMobileOpen(false)}>
//                       My Orders
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/profile" onClick={() => setMobileOpen(false)}>
//                       Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <button onClick={logout}>Logout</button>
//                   </li>
//                 </>
//               ) : (
//                 <li>
//                   <Link to="/signin" onClick={() => setMobileOpen(false)}>
//                     Sign In
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

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
                    <a className="px-4 py-2 hover:bg-gray-100">My Orders</a>
                  </li>
                  <li>
                    <a className="px-4 py-2 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <a className="px-4 py-2 hover:bg-gray-100">Logout</a>
                  </li>
                  <li>
                    <a className="px-4 py-2 hover:bg-gray-100">Sign In</a>
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
      </nav>
    </>
  );
};

export default Navbar;
