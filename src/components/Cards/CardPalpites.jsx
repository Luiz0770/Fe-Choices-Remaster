import { Bandeira } from "../../shared/icons";
import ButtonPalpites from "../UI/ButtonPalpites";

export default function CardPalpites({ data, nomeCorrida, pilotos }) {
  return (
    <article className="bg-[#22374C] rounded p-5 mt-10 shadow-2xl">
      {/* Card Infos */}
      <div className="flex items-center gap-3">
        <img src={Bandeira} className="w-10" />
        <div>
          <span className="font-semibold">{data}</span>
          <h2 className="text-white md:text-lg font-semibold">{nomeCorrida}</h2>
        </div>
      </div>
      {/* Card Palpites */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {pilotos.map((piloto, idx) => (
          <ButtonPalpites key={"palpite-" + idx} piloto={piloto} />
        ))}
        {/* Card Button */}
      </div>
      <button className="mt-5 w-full bg-[#7B8EA3] p-3 rounded text-white font-semibold uppercase hover:bg-slate-300 duration-300">
        Palpitar
      </button>
    </article>
  );
}
