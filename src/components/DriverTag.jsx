export default function DriverTag({ piloto }) {
  return (
    <div className="bg-[#15293D] py-1 pl-3 pr-4 flex gap-2 border-b border-[#112233]">
      <span className="w-5">{piloto.numero}</span>
      <span
        className={"pl-3 border-l-2"}
        style={{ borderLeftColor: piloto.equipe.corHexadecimal }}
      >
        {piloto.abreviacao}
      </span>
    </div>
  );
}
