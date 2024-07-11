import CardData from "./CardData";
import useRobbuData from "../../hooks/useRobbuData";
function Robbu() {
    const { robbuData, errorRobbu } = useRobbuData();
    return (
        <CardData Data={robbuData} fornecedor="Robbu" error={errorRobbu} />
    )
}
export default Robbu;
