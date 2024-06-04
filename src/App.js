import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Verifique a capitalização correta

import Bandeiras from "./components/Bandeiras";
import Logins from "./components/Logins";
import Templates from "./components/Templates";

function App() {
  return (
    <section className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Bandeiras />} />
            <Route path="/logins" element={<Logins />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
