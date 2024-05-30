import { useState, useEffect } from "react";

export default function useRobbuData() {
  const [robbuData, setRobbuData] = useState([]);
  const [errorRobbu, setError] = useState(null);

  useEffect(() => {
    async function fetchRobbuData() {
      try {
        const response = await fetch("http://localhost:3005/pegaDadosRobbu", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Erro ao fazer requisição: ${response.statusText}`);
        }

        const data = await response.json();
        setRobbuData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchRobbuData();
  }, []);

  return { robbuData, errorRobbu };
}
