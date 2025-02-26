import { NavLink } from "react-router-dom";

export default function NavItem({icon, text, page}) {
  return (
    <NavLink to={page} className="cursor-pointer flex items-center hover:text-white hover:scale-105 hover:duration-150">
      {icon ? <img src={icon} className="mr-2" size={"20px"} /> : <></>}
      {text}
    </NavLink>
  );
}
