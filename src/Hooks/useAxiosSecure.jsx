import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-v2.vercel.app",
  withCredentials: true,
});
function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("error tract ", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("log Out The User");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
}

export default useAxiosSecure;
