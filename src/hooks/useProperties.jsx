import axios from "axios";
import { useEffect, useState } from "react";

const useProperties = ({filters}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`/api/properties`,{
            params:filters
        });
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, [properties, filters]);

  return properties;
};

export default useProperties;
