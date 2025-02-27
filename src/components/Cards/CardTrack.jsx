import {
  iconCurvas,
  iconLocalizacao,
  iconSentido,
  iconTamanho,
} from "../../shared/icons";
import { SaoPauloTrack } from "../../shared/tracks";

export default function CardTrack() {
  return (
    <article className="bg-[#30455A] p-5 rounded shadow-2xl">
      <div className="flex flex-col leading-3">
        <span className="text-[#596E84] text-md">Circuito de</span>
        <span className="text-2xl font-semibold">SAO PAULO</span>
      </div>
      <img className="mx-auto" src={SaoPauloTrack} alt="Circuito de Portland" />

      <div className="flex flex-col md:flex-row gap-12 justify-center md:items-center border-t-4 border-[#22374C] p-4 mt-10">
        {/* Localizacao Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconLocalizacao} />
          <div className="leading-snug">
            <p>Circuito de Sao Paulo</p>
            <p className="font-semibold">Sao Paulo, Brasil</p>
          </div>
        </div>

        {/* Tamanho Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconTamanho} />
          <div className="leading-snug">
            <p>Tamanho do circuito:</p>
            <p className="font-semibold">3.190 km</p>
          </div>
        </div>

        {/* Curvas Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconCurvas} />
          <div className="leading-snug">
            <p>Numero de Curvas:</p>
            <p className="font-semibold">12</p>
          </div>
        </div>

        {/* Direcao Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconSentido} />
          <div className="leading-snug">
            <p>Direção do circuito:</p>
            <p className="font-semibold">Sentido Horário</p>
          </div>
        </div>
      </div>
    </article>
  );
}
