import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useProperty = () => {
  const [property, setProperty] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `?owner=${user?.email}`
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, [property, user]);

  return property;
};

export default useProperty;
