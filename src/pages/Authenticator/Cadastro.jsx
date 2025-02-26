import { Link } from "react-router-dom";
import FormsAuthenticator from "../../components/FormsAuthenticator";

export default function Cadastro() {
  return (
    <main className="flex items-center justify-center min-h-[80vh]">
      <FormsAuthenticator title={"Cadastro"} textButton={"Cadastrar"}>
        {/* Nome Usuario */}
        <div className="flex flex-col">
          <label htmlFor="usuarioCd">Nome de Usuário</label>
          <input
            type="text"
            name="usuarioCd"
            id="usuarioCd"
            placeholder="Seu nome"
            className="mt-2 p-3 bg-gray-200 rounded border-none w-full shadow"
          />
        </div>
        {/* Senha Usuario */}
        <div className="flex flex-col">
          <label htmlFor="senhaCd">Senha</label>
          <input
            type="password"
            name="senhaCd"
            id="senhaCd"
            placeholder="*******"
            className="mt-2 p-3 bg-gray-200 rounded border-none w-full shadow"
          />
        </div>
        {/* Confirmar Senha */}
        <div className="flex flex-col">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            placeholder="*******"
            className="mt-2 p-3 bg-gray-200 rounded border-none w-full shadow"
          />
          <p className="mt-2 text-white">Já tem cadastro? <Link className="font-bold text-[#4477bb]" to={"/cadastro"}>Clique aqui</Link></p>
        </div>
      </FormsAuthenticator>
    </main>
  );
}


