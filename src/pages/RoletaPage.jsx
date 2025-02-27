import Roleta from "../components/Roleta";
import { iconPontos } from "../shared/icons";

export default function RoletaPage() {
  return (
    <>
      <main className="container mx-auto px-5 lg:px-10 my-10">
        <div className="my-10 flex flex-col gap-1 text-center md:text-start">
          <h1 className="text-4xl uppercase text-white font-bold">
            ROLETA DIÁRIA
          </h1>
          <p className="text-xl text-white flex gap-1 items-center  justify-center sm:justify-start">
            Gire sua roleta diária e tenha chance de ganhar pontos
            <span>
              <img className="hidden sm:block" src={iconPontos} />
            </span>
          </p>
        </div>
        <section>
          <Roleta />
        </section>
      </main>
    </>
  );
}
