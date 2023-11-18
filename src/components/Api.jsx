import React, { useEffect } from "react";
import axios from "axios";

const Api = ({ setData }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("logements.json");
        setData(res.data);
      } catch (error) {
        console.error("Erreur", error);
      }
    };
    getData();
  }, [setData]);

  return null;
};

export default Api;
