import CardData from "./CardData";
import useZapData from "../../hooks/useZapData";

function Zap2go() {
    const { zapData, error } = useZapData();
    return (
        <CardData Data={zapData} fornecedor="Zap2go" error={error} />
    );
}
export default Zap2go;
