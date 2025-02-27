import {
  iconRoletaW,
  IlustrationGiro1,
  IlustrationGiro2,
} from "../../shared/icons";
import styled from "styled-components";
import ButtonLink from "../UI/ButtonLink";

const GradientCard = styled.article`
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: space-around;
  box-shadow: 0 25px 30px -12px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    120deg,
    hsl(210deg 30% 27%) 0%,
    hsl(210deg 29% 28%) 8%,
    hsl(210deg 28% 30%) 17%,
    hsl(210deg 27% 31%) 25%,
    hsl(210deg 26% 32%) 33%,
    hsl(210deg 25% 34%) 42%,
    hsl(210deg 24% 35%) 50%,
    hsl(211deg 23% 36%) 58%,
    hsl(211deg 22% 38%) 67%,
    hsl(211deg 21% 39%) 75%,
    hsl(211deg 21% 41%) 83%,
    hsl(211deg 20% 42%) 92%,
    hsl(211deg 19% 43%) 100%
  );

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 3.5rem;
  }
`;

export default function CardGiro() {
  return (
    <GradientCard>
      <img
        src={IlustrationGiro1}
        alt="Pessoa sentada mexendo no celular."
        className="w-24 hidden md:block"
      />
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white font-semibold text-2xl lg:text-3xl uppercase text-center">
          Venha coletar seu giro grátis
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 md:gap-3">
          <ButtonLink page={"/roleta"} Px="px-5" Py="py-4">
            <img src={iconRoletaW} />
            ROLETA SEMANAL
          </ButtonLink>
          <ButtonLink
            page={"/roleta"}
            bgColor="bg-transparent"
            Px="px-5"
            Py="py-4"
            border="border"
          >
            <img src={iconRoletaW} />
            ROLETA DIARIA
          </ButtonLink>
        </div>
      </div>
      <img
        src={IlustrationGiro2}
        alt="Pessoa em pé mexendo no celular."
        className="w-20 hidden md:block"
      />
    </GradientCard>
  );
}
