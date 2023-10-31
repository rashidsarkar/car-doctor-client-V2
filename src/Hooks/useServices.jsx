import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("https://car-doctor-server-v2.vercel.app/services")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
    axios
      .get("https://car-doctor-server-v2.vercel.app/services", {
        withCredentials: true,
      })
      .then((res) => setServices(res.data));
  }, []);

  return services;
}

export default useServices;
