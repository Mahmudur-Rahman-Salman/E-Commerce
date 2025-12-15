import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  // Interceptor is added once, token dynamically updated before request
  axiosSecure.interceptors.request.use(
    (config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosSecure;
};

export default useAxiosSecure;


// This custom hook, useAxiosSecure, creates an Axios instance configured to include an authorization token in the headers of each request. It uses the useAuth hook to access the current user's authentication state and dynamically sets the Authorization header with the user's access token before each request is sent. This ensures that all requests made using this Axios instance are authenticated, promoting secure communication with the backend API.    