import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import "./App.css";
import Busca from "./pages/busca/Busca.jsx";
import Cadastra from "./pages/cadastra/Cadastra.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/cadastra" element={<Cadastra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
