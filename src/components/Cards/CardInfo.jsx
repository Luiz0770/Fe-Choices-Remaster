import styled from "styled-components";

const GradientCard = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  padding: 1.25rem;
  text-align: center;
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
    text-align: left;
  }
`;

export default function CardInfo({title, children, image}) {
  return (
    <GradientCard>
      <h2 className="text-white font-semibold text-2xl md:text-2xl">
        {title}
      </h2>
      <p className="mt-3 text-gray-300 md:text-lg max-w-full">
        {children}
      </p>
      <div className="mt-5 border-t border-gray-300 pt-5">
        <img
          src={image}
          alt="Imagem do fantasy"
          className="w-full mx-auto"
        />
      </div>
    </GradientCard>
  );
}
