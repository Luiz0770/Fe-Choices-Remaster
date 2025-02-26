import { NavLink } from "react-router-dom";

function ButtonLink({ page, text }) {
  return (
    <NavLink
      to={page}
      className="bg-white text-black font-bold py-2 px-3 rounded hover:bg-transparent border hover:border-white hover:text-white hover:scale-105 hover:duration-200"
    >
      <p className="text-center">{text}</p>
    </NavLink>
  );
}

export default ButtonLink;
