import { useEffect, useState } from "react";
import axios from "axios";

const Datas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("../logements.json");
        setData(res.data);
      } catch (error) {
        console.error("Erreur", error);
      }
    };
    getData();
  }, []);

  return { data };
};

export default Datas;
