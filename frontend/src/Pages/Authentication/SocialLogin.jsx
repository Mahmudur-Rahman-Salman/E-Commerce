import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleLogin, loading } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const user = await googleLogin();
      Swal.fire({
        icon: "success",
        title: "Logged in Successfully",
        text: `Welcome, ${user.displayName || "User"}!`,
        confirmButtonColor: "#4f46e5",
      });
      navigate("/");
      return user;
    } catch (error) {
      let message = "Something went wrong. Please try again.";

      if (error.code === "auth/popup-closed-by-user") {
        message = "Google login was cancelled.";
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: message,
        confirmButtonColor: "#ef4444",
      });

      throw error; // rethrow to let the caller know
    }
  };
  return (
    <>
      <div className="mt-5">
        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full flex justify-center items-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            <>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="google logo"
              />
              Continue with Google
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
