import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function ToggleButton({ estilo, condition, setCondition }) {
  return (
    <button className={estilo} onClick={() => setCondition(!condition)}>
      {condition ? (
        <IoMdClose className="hover:scale-105 hover:duration-100" size={"30px"} />
      ) : (
        <RxHamburgerMenu className="hover:scale-105 hover:duration-100" size={"30px"} />
      )}
    </button>
  );
}
