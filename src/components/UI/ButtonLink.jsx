import { NavLink } from "react-router-dom";

function ButtonLink({
  page,
  bgColor = "bg-[#4477BB]",
  textColor = "text-white",
  Px = "py-2",
  Py = "px-3",
  border = "",
  children,
}) {
  return (
    <NavLink
      to={page}
      className={`${bgColor} ${textColor} ${Px} ${Py} ${border} flex gap-3 text-center rounded hover:scale-105 hover:duration-200`}
    >
      {children}
    </NavLink>
  );
}

export default ButtonLink;
