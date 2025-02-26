import { Link } from "react-router-dom";
import { IlustrationBemVindo, LogoGoogle } from "../share/icons";

export default function BemVindo() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center bg-gray-700 p-6 md:p-8 rounded-lg justify-between">
          {/* Text Card */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-white text-3xl font-bold">
              Bem-vindo ao FE Choices
            </h2>
            <p className="text-gray-300">
              Cadastre-se e receba bônus de até 800 pontos
            </p>
            <div className="flex gap-4 justify-center items-center md:justify-start">
              <Link
                to="/cadastro"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Cadastre-se
              </Link>
              <Link to="/cadastro">
                <img
                  src={LogoGoogle}
                  alt="Google"
                  className="w-10 border p-2 rounded-md"
                />
              </Link>
            </div>
            <p className="text-gray-400 flex gap-2 justify-center md:justify-start mt-4">
              <span>Cadastre-se</span> | <span>Palpite</span> |{" "}
              <span>Ganhe Pontos</span>
            </p>
          </div>
          {/* Imagem Card */}
          <img
            src={IlustrationBemVindo}
            alt="Dois homens com um carro esportivo"
            className="w-1/2 hidden lg:block mt-6 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
