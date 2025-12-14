import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Register = () => {
  const { signup} = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await signup(name, email, password);

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: `Welcome, ${name}! Your account has been created.`,
        confirmButtonColor: "#4f46e5", // indigo-600
      });

      navigate("/");
    } catch (error) {
      setError(error.message);

      let message = "Something went wrong. Please try again.";

      // Firebase email already in use
      if (error.code === "auth/email-already-in-use") {
        message = "This email is already registered. Try logging in.";
      }

      // Firebase invalid email
      if (error.code === "auth/invalid-email") {
        message = "Invalid email address.";
      }

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: message,
        confirmButtonColor: "#ef4444", // red-500
      });
    }
  };



  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <h3 className="font-extrabold text-4xl text-gray-800">
              E-Commerce
            </h3>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={handleRegister} className="space-y-5">
              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                  focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                  focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                  focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 
                active:bg-indigo-600 rounded-lg duration-150"
              >
                Create account
              </button>
            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
