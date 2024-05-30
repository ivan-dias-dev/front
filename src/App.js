import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import CardData from "./components/CardData";
import useZapData from "./hooks/useZapData";
import useRobbuData from "./hooks/useRobbuData";

function App() {
  const { zapData, error } = useZapData();
  const { robbuData, errorRobbu } = useRobbuData();

  return (
    <section className="App">
      <div className="body">
        <Header />
        <CardData Data={zapData} fornecedor="Zap2go" error={error} />
        <CardData Data={robbuData} fornecedor="Robbu" error={errorRobbu} />
        <Footer />
      </div>
    </section>
  );
}

export default App;
