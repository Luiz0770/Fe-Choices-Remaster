import { ilustrationError } from "../share/icons";

export default function PageNotFound() {
  return (
    <main className="flex flex-col justify-center gap-16 mx-10 lg:mx-48 pt-15 pb-22">
      <h1 className="text-center lg:text-start text-white text-2xl font-semibold">Página não encontrada</h1>
      <img src={ilustrationError} alt="404 Error" className="md:w-3/5 self-center" />
    </main>
  );
}
