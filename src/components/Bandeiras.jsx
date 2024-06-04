
import { format, formatDistance, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"

import CardData from "./CardData";

import useZapData from "../hooks/useZapData";
import useRobbuData from "../hooks/useRobbuData";
import useOtimaData from "../hooks/useOtimaData";

function Bandeiras() {
    const { OtimaData, errorOtima } = useOtimaData();
    const { zapData, error } = useZapData();
    const { robbuData, errorRobbu } = useRobbuData();
    const date = new Date();
    const DateFormatted = format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })
    const DateFormattedInText = "Atualizado em " + DateFormatted
    return (
        <div className="body">
            <CardData Data={OtimaData} fornecedor="Otima" error={errorOtima} data={DateFormattedInText} />
            <CardData Data={zapData} fornecedor="Zap2go" error={error} />
            <CardData Data={robbuData} fornecedor="Robbu" error={errorRobbu} />
        </div>
    )
}

export default Bandeiras;
