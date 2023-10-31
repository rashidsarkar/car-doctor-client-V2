import axios from "axios";
import { useEffect, useState } from "react";

function useNumber() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    axios.get("get/num").then((res) => {
      setNumber(res.data);
    });
  }, []);

  return 5;
}

export default useNumber;
