import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Palpites from "./pages/Palpites";
import Cadastro from "./pages/Authenticator/Cadastro";
import Login from "./pages/Authenticator/Login";
import RoletaPage from "./pages/RoletaPage";
import Circuito from "./pages/Circuito";
import AoVivo from "./pages/AoVivo";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/palpites" element={<Palpites/>} />
            <Route path="/roleta" element={<RoletaPage/>} />
            <Route path="/circuito" element={<Circuito/>} />
            <Route path="/aovivo" element={<AoVivo/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
