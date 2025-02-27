import CardHelcome from "../components/Cards/CardHelcome";
import CardCircuito from "../components/Cards/CardCircuito";
import CardGiro from "../components/Cards/CardGiro";
import CardInfo from "../components/Cards/CardInfo";
import MiniCard from "../components/Cards/MiniCard";
import {
  IlustrationGanhePontos,
  IlustrationResgatePremios,
  ImgFuncionamento,
} from "../shared/icons";

export default function Home() {
  return (
    <main
      id="home"
      className="container mx-auto my-10 flex flex-col gap-10 px-10"
    >
      <CardHelcome />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <MiniCard
          image={IlustrationGanhePontos}
          title={"Ganhe mais pontos!"}
          text={"Chame seus amigos através do seu link e ganhe mais pontos  "}
          textButton={"SAIBA MAIS"}
        />
        <MiniCard
          image={IlustrationResgatePremios}
          title={"Resgate prêmios!"}
          text={
            "De seus palpites, ganhe pontos e troque seus pontos por prêmios"
          }
          textButton={"VEJA OS PRÊMIOS"}
        />
      </div>
      <CardCircuito />
      <CardGiro />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <CardInfo
          title={"Como funcionam os Palpites?"}
          image={ImgFuncionamento}
        >
          Com a FE CHOICES, o usuário tem a oportunidade de testar os seus
          conhecimentos sobre a Fórmula E, palpitando, de forma totalmente
          gratuita, apenas usando os nossos pontos.
        </CardInfo>
        <CardInfo title={"Como funciona o Fantasy?"} image={ImgFuncionamento}>
          Com a FE CHOICES, o usuário tem a oportunidade de criar a sua própria
          equipe no Fantasy, podendo escolher os seus pilotos, e escolhendo a
          bandeira de sua equipe, de equipes reais da FE.
        </CardInfo>
      </div>
    </main>
  );
}
