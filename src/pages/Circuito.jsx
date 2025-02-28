// Importações necessárias do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Importação dos módulos necessários
import "swiper/css"; // Importa o estilo base do Swiper
import "swiper/css/navigation"; // Estilos para a navegação (setas)
import "swiper/css/pagination"; // Estilos para a paginação

import CardTrack from "../components/Cards/CardTrack";
import tracks from "../data/tracks.json";

export default function Circuito() {
  return (
    <main className="container mx-auto px-5 lg:px-10 my-10">
      <div className="my-10 flex flex-col gap-1 text-center md:text-start">
        <h1 className="text-4xl uppercase text-white font-bold">Circuitos</h1>
        <p className="text-xl text-white flex gap-1 items-center justify-center sm:justify-start">
          Conheça os circuitos que acontecem a corrida da Formula E.
        </p>
      </div>

      <section>
        <Swiper
          slidesPerView={1} 
          spaceBetween={60} 
          loop={true} 
          pagination={{ clickable: true }} 
          navigation={true} 
          modules={[Navigation, Pagination]}
          >
          {tracks.pistas.map((pista) => (
            <SwiperSlide key={pista.id}>
              <CardTrack pista={pista}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
