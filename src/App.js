import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Verifique a capitalização correta

import Robbu from "./components/Bandeiras/Robbu";
import Otima from "./components/Bandeiras/Otima";
import Zap2go from "./components/Bandeiras/Zap";
import Logins from "./components/Logins/Logins";
import Templates from "./components/Templates";

function App() {
  return (
    <section className="App">
      <Router>
        <Header />
        <main>
          <div className="body">
            <Routes>
              <Route path="/robbu" element={<Robbu />} />
              <Route path="/logins" element={<Logins />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/Otima" element={<Otima />} />
              <Route path="/Zap2go" element={<Zap2go />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
