import {
  iconCurvas,
  iconLocalizacao,
  iconSentido,
  iconTamanho,
} from "../../shared/icons";

export default function CardTrack({pista}) {
  return (
    <article className="bg-[#30455A] p-5 rounded shadow-2xl ">
      <div className="flex flex-col leading-3">
        <span className="text-[#596E84] text-md">Circuito de</span>
        <span className="text-2xl font-semibold">{pista.nome}</span>
      </div>
      <img className="mx-auto min-h-[350px]" src={pista.imagem} alt={`Circuito de ${pista.nome}`} />

      <div className="flex flex-col md:flex-row gap-12 justify-center md:items-center border-t-4 border-[#22374C] p-4 mt-10">
        {/* Localizacao Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconLocalizacao} />
          <div className="leading-snug">
            <p>Circuito de {pista.nome}</p>
            <p className="font-semibold">{pista.localizacao}</p>
          </div>
        </div>

        {/* Tamanho Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconTamanho} />
          <div className="leading-snug">
            <p>Tamanho do circuito:</p>
            <p className="font-semibold">{pista.tamanho}</p>
          </div>
        </div>

        {/* Curvas Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconCurvas} />
          <div className="leading-snug">
            <p>Numero de Curvas:</p>
            <p className="font-semibold">{pista.curva}</p>
          </div>
        </div>

        {/* Direcao Circuito */}
        <div className="flex gap-3 items-center">
          <img src={iconSentido} />
          <div className="leading-snug">
            <p>Direção do circuito:</p>
            <p className="font-semibold">{pista.sentido}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
