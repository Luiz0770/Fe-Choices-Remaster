export default function ButtonPalpites({ piloto }) {
    return (
      <button className="bg-[#596E84] rounded flex justify-between items-center px-3 py-2.5 hover:bg-white hover:text-[#596E84] hover:cursor-pointer duration-200">
        <h3>{piloto.nome}</h3>
        <p className="font-semibold">{piloto.odd}</p>
      </button>
    );
  }
  