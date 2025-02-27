import { IlustrationBandeira } from "../../shared/icons";
import ButtonLink from "../UI/ButtonLink";

export default function CardCircuito() {
  return (
    <article className="my-10 flex flex-col gap-8 items-center text-center text-white">
      <h2 className="text-2xl font-semibold uppercase">
        Venha conhecer o próximo circuito que será percorrido pela Fórmula E!
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="flex items-center gap-3 lg:border-r border-[#30455a] pr-5">
          <img
            src={IlustrationBandeira}
            alt="Bandeira dos Estados Unidos da América"
            className="w-8 h-6"
          />
          <h3 className="text-lg font-semibold uppercase">
            Portland - rodada 13
          </h3>
        </div>
        <ButtonLink page={"/circuitos"} Px="px-5" Py="py-4">
          VER CIRCUITO
        </ButtonLink>
      </div>
    </article>
  );
}
