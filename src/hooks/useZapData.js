import { useState, useEffect } from "react";

export default function useZapData() {
  const [zapData, setZapData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchZapData() {
      try {
        const response = await fetch("http://localhost:3005/pegaDadosZap", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Erro ao fazer requisição: ${response.statusText}`);
        }

        const data = await response.json();
        setZapData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchZapData();
  }, []);

  for (let i = 0; i < zapData.length - 1; i++) {
    let waba = zapData[i].channelStatus;
    if (waba === "Não registrado") {
      zapData[i].channelQuality = "Baixa";
    }
  }
  return { zapData, error };
}
