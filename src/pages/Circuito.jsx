import CardTrack from "../components/Cards/CardTrack";

export default function Circuito() {
  return (
    <>
      <main className="container mx-auto px-5 lg:px-10 my-10">
        <div className="my-10 flex flex-col gap-1 text-center md:text-start">
          <h1 className="text-4xl uppercase text-white font-bold">Circuitos</h1>
          <p className="text-xl text-white flex gap-1 items-center  justify-center sm:justify-start">
            Conheça os circuitos que acontecem a corrida da Formula E.
          </p>
        </div>
        <section>
            <CardTrack/>
        </section>
      </main>
    </>
  );
}
