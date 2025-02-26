import NavItem from "../UI/NavItem";
import ButtonLink from "../UI/ButtonLink";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {
  iconAfiliados,
  iconAoVivo,
  iconBlog,
  iconCircuitos,
  iconFantasy,
  iconPalpites,
  iconPremios,
  iconRoleta,
  iconSobre,
  iconSuporte,
  Logo,
} from "../../shared/icons";

const HeaderMobileMenu = styled.nav`
  padding: 12px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #30455a;
`;

const NavMobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 1px solid #30455a;
`;

export default function MobileMenu({ setMobileMenuOpen }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 left-0 w-3/4 h-full bg-[#123] text-white flex flex-col p-6 shadow-lg xl:hidden"
    >
      <HeaderMobileMenu>
        <NavLink to="/">
          <img src={Logo} alt="FE Choices" />
        </NavLink>
        <button onClick={() => setMobileMenuOpen(false)}>
          <IoMdClose size={"30px"} />
        </button>
      </HeaderMobileMenu>
      <NavMobileMenu>
        <NavItem icon={iconPalpites} text={"Palpites"} page={"/palpites"} />
        <NavItem icon={iconRoleta} text={"Roleta"} page={"/roleta"} />
        <NavItem icon={iconFantasy} text={"Fantasy"} page={"/fantasy"} />
        <NavItem icon={iconAoVivo} text={"Ao Vivo"} page={"/aovivo"} />
        <NavItem icon={iconCircuitos} text={"Circuito"} page={"/circuito"} />
      </NavMobileMenu>
      <NavMobileMenu>
        <NavItem icon={iconSobre} text={"Sobre Nós"} page={"/about"} />
        <NavItem icon={iconAfiliados} text={"Afiliados"} page={"/afiliados"} />
        <NavItem icon={iconPremios} text={"Prêmios"} page={"/premios"} />
        <NavItem icon={iconSuporte} text={"Suporte"} page={"/suporte"} />
        <NavItem icon={iconBlog} text={"Blog"} page={"/blog"} />
      </NavMobileMenu>
      <div className="flex flex-col gap-4 mt-6">
        <ButtonLink page={"/login"}>Entrar</ButtonLink>
        <ButtonLink
          page={"/cadastro"}
          bgColor={"bg-white"}
          textColor={"text-black"}
        >
          Cadastre-se
        </ButtonLink>
      </div>
    </motion.div>
  );
}
