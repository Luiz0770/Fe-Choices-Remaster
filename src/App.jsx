import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Palpites from "./pages/Palpites";
import Cadastro from "./pages/Authenticator/Cadastro";
import Login from "./pages/Authenticator/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/palpites" element={<Palpites/>} />
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
