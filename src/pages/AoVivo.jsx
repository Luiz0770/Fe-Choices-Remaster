import DriverTag from "../components/DriverTag";
import drivers from "../data/drivers.json";

export default function AoVivo() {
  return (
    <main className="container mx-auto px-10 my-10">
      <div className="my-10 flex flex-col gap-1 text-center md:text-start">
        <h1 className="text-4xl uppercase text-white font-bold">Ao vivo</h1>
        <p className="text-xl text-white flex gap-1 items-center  justify-center sm:justify-start">
          Saiba as informações sobre a corrida dinamicamente:
        </p>
      </div>
      <section className="flex gap-5 items-start justify-center text-white">
        <div className="flex flex-col gap-0.5">
          <div className="bg-[#15293D] py-1 px-2 border-b border-[#112233] rounded-t-lg">
            <span className="font-semibold">LAP 7/29</span>
          </div>
          {drivers.pilotos.map((piloto) => (
            <DriverTag key={piloto.id} piloto={piloto} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 w-3/4">
          {/* Trasmisao Principal */}
          <div className="bg-[#081122] flex justify-center items-center col-span-3 rounded p-25 min-h-[550px]">
            TRANSMISSÃO AO VIVO
          </div>
          {/* Camera Piloto 1 */}
          <div className="bg-[#081122] flex justify-center items-center rounded p-25">
            PILOTO
          </div>
          {/* Camera Piloto 1 */}
          <div className="bg-[#081122] flex justify-center items-center rounded">
            PILOTO
          </div>
          {/* Camera Piloto 1 */}
          <div className="bg-[#081122] flex justify-center items-center rounded">
            PILOTO
          </div>
        </div>
      </section>
    </main>
  );
}
