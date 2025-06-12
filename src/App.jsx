// App.jsx
import "./index.css";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage.jsx";
import Add from "./Adds/Add.jsx";
import Footer from "./Footer/Footer.jsx";
import PerguntasPage from "./MainPage/PerguntasPage.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="containerPrincipal">
        <Routes>
          <Route path="/" element={<><MainPage /><Add /></>} />
          <Route path="/perguntas" element={<PerguntasPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
