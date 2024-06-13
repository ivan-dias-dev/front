import { useState, useEffect } from "react";

export default function useRobbuData() {
  const [robbuData, setRobbuData] = useState([]);
  const [errorRobbu, setError] = useState(null);

  // for (let i = 0; i < robbuData.length - 1; i++) {
  //   let status = robbuData[i].status;
  //   if (robbuData[i].wallet_name === robbuData[i + 1].wallet_name) {
  //     // if (status === "RED") {
  //     //   carteiraNomeAtualizado = {
  //     //     carteiraNomeAtualizado
  //     //   }
  //     //   console.log(carteiraNomeAtualizado, ponteiro);
  //     // }
  //     robbuData.splice(i + 1, 1);
  //   }
  // }
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
