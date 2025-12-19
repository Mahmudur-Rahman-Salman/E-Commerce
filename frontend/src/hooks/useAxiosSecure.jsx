import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;


// This custom hook, useAxiosSecure, creates an Axios instance configured to include an authorization token in the headers of each request. It uses the useAuth hook to access the current user's authentication state and dynamically sets the Authorization header with the user's access token before each request is sent. This ensures that all requests made using this Axios instance are authenticated, promoting secure communication with the backend API.