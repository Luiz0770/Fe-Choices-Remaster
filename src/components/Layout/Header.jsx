import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Logo } from "../../shared/icons";
import MobileMenu from "./MobileMenu";
import ToggleButton from "../UI/ToggleButton";
import ButtonLink from "../UI/ButtonLink";
import NavItem from "../UI/NavItem";

export default function Header({ isOpen, setIsOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#123] p-6 flex items-center justify-between border-b-2 border-[#30455A] shadow-lg sticky top-0 z-50">
      {/* ============== Menu para telas grandes ============== */}
      {/* Itens de Navegacao */}
      <div className="flex items-center gap-5">
        <ToggleButton
          estilo="hidden xl:block"
          condition={isOpen}
          setCondition={setIsOpen}
        />
        <NavLink to="/">
          <img src={Logo} alt="FE Choices" />
        </NavLink>
      </div>

      {/* Itens de Navegacao */}
      <div className="hidden xl:flex justify-between w-3/5 text-lg">
        <nav className="flex gap-8 items-center">
          <NavItem page={"/"} text={"Home"} />
          <NavItem page={"/palpites"} text={"Palpites"} />
          <NavItem page={"/fantasy"} text={"Fantasy"} />
          <NavItem page={"/roleta"} text={"Roleta"} />
        </nav>
        <div className="flex gap-6 items-center">
          <NavItem page={"/login"} text={"Entrar"} />
          <ButtonLink page={"/cadastro"} bgColor="bg-white" textColor="text-black">
            Cadastre-se
          </ButtonLink>
        </div>
      </div>

      {/* Ícone do menu mobile */}
      <ToggleButton
        estilo="xl:hidden"
        condition={mobileMenuOpen}
        setCondition={setMobileMenuOpen}
      />

      {/* ============== Menu mobile ============== */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
      </AnimatePresence>
    </header>
  );
}
