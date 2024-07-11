import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import CardData from "./CardData";
import useOtimaData from "../../hooks/useOtimaData";

function Otima() {
    const { OtimaData, errorOtima } = useOtimaData();
    const date = new Date();
    const DateFormatted = format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });
    const DateFormattedInText = "Atualizado em " + DateFormatted;

    return (
            <CardData Data={OtimaData} fornecedor="Otima" error={errorOtima} data={DateFormattedInText} />
    );
}

export default Otima;
