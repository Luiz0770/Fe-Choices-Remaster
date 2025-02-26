import styled from "styled-components";
import ButtonLink from "../UI/ButtonLink";

const GradientCard = styled.div`
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  justify-content: space-between;
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
    padding: 2rem 3.5rem;
  }
`;

export default function MiniCard({ image, title, text, textButton }) {
  return (
      <GradientCard>
        {/* Text Card */}
        <div className="flex flex-col gap-4 text-center md:text-left lg:max-w-1/2">
          <div>
            <h2 className="text-white text-3xl font-bold mb-1">{title}</h2>
            <p className="text">{text}</p>
          </div>
          <div className="flex gap-4 justify-center items-center md:justify-start">
            <ButtonLink page={"/cadastro"}>{textButton}</ButtonLink>
          </div>
        </div>
        {/* Imagem Card */}
        <img
          src={image}
          alt="Dois homens com um carro esportivo"
          className="w-1/3 hidden lg:block mt-6 md:mt-0"
        />
      </GradientCard>
  );
}
