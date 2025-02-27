import CardPalpites from "../components/Cards/CardPalpites";
import palpites from "../data/drivers.json";
import { iconPontos } from "../shared/icons";

export default function Palpites() {
  return (
    <main className="container mx-auto px-10 my-10">
      <div className="my-10 flex flex-col gap-1 text-center md:text-start">
        <h1 className="text-4xl uppercase text-white font-bold">Palpites</h1>
        <p className="text-xl text-white flex gap-1 items-center  justify-center sm:justify-start">
          Palpite para multiplicar os seus pontos
          <span>
            <img className="hidden sm:block" src={iconPontos} />
          </span>
        </p>
      </div>
      <section>
        <div>
          {palpites.map((palpite, idx) => (
            <CardPalpites
              key={idx}
              data={palpite.data}
              nomeCorrida={palpite.nomeCorrida}
              pilotos={palpite.pilotos}
            />
          ))}
        </div>
        <div>
          {palpites.map((palpite, idx) => (
            <CardPalpites
              key={idx}
              data={palpite.data}
              nomeCorrida={palpite.nomeCorrida}
              pilotos={palpite.pilotos}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
