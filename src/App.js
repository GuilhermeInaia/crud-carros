import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Cardapio/Home";
import Listar from "./pages/Cardapio/Listar";
import Novo from "./pages/Cardapio/Novo";
import Config from "./pages/Cardapio/Config";

export default function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listar" element={<Listar />} />
          <Route path="/novo" element={<Novo />} />
          <Route path="/login" element={<Config />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

