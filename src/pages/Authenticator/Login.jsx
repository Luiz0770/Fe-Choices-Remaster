import { Link } from "react-router-dom";
import FormsAuthenticator from "../../components/FormsAuthenticator";

export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-[80vh]">
      <FormsAuthenticator title={"Login"} textButton={"Entrar"}>
        {/* Nome Usuario */}
        <div className="flex flex-col">
          <label htmlFor="usuarioLg">Nome de Usuário</label>
          <input
            type="text"
            name="usuarioLg"
            id="usuarioLg"
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
          <p className="mt-2 text-white">Não tem cadastro? <Link className="font-bold text-[#4477bb]" to={"/cadastro"}>Clique aqui</Link></p>
        </div>
      </FormsAuthenticator>
    </main>
  );
}


