import { Link } from "react-router-dom";
import styled from "styled-components";

const GradientCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
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
    width: 40%;
    flex-direction: row;
    padding: 3rem 2rem 1.5rem;
  }
`;

export default function FormsAuthenticator({ title, textButton, children }) {
  return (
    <GradientCard>
      <form className="flex flex-col gap-6 w-full">
        <h2 className="text-4xl font-semibold text-white text-center uppercase">{title}</h2>
        {children}
        {/* Botao Cadastrar */}
        <Link
          className="shadow text-center w-full p-3 font-bold text-[#15293D] uppercase bg-[#9AAABB] rounded hover:scale-105 hover:duration-200">
          {textButton}
        </Link>
      </form>
    </GradientCard>
  );
}
