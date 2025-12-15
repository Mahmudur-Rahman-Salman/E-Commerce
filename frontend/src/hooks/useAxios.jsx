import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;


// This custom hook, useAxios, creates and returns an Axios instance configured with a base URL pointing to the backend server. This instance can be used throughout the application to make HTTP requests to the backend API without needing to repeatedly specify the base URL.