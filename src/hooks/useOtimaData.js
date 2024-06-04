import { useState, useEffect } from "react";

export default function useOtimaData() {
  const [OtimaData, setOtimaData] = useState([]);
  const [errorOtima, setError] = useState(null);

  useEffect(() => {
    async function fetchOtimaData() {
      console.log("entramo");
      try {
        const response = await fetch("http://localhost:3005/otima", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Erro ao fazer requisição: ${response.statusText}`);
        }

        const data = await response.json();
        setOtimaData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchOtimaData();
  }, []);

  return { OtimaData, errorOtima };
}
