import NavItem from "../UI/NavItem";
import styled from "styled-components";
import SocialIcons from "../UI/SocialIcons";
import { NavLink } from "react-router-dom";
import {
  iconFacebook,
  iconInstagram,
  iconTwitter,
  ilustrationFooter,
  Logo,
} from "../../share/icons";

const GridFooter = styled.div`
  padding-top: 12px; /* pt-3 */
  padding-bottom: 40px; /* pb-10 */
  width: 100%; /* w-full */
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 64px; /* gap-16 (16 * 4px = 64px) */
  margin-left: auto; /* mx-auto */
  margin-right: auto; /* mx-auto */
  justify-items: center; /* justify-items-center */
  text-align: start; /* sm:text-start */
  border-bottom: 1px solid #30455a; /* border-b border-[#30455A] */

  @media (min-width: 640px) {
    /* sm */
    margin-left: 0; /* sm:mx-0 */
    margin-right: 0; /* sm:mx-0 */
    grid-template-columns: repeat(3, 1fr); /* sm:grid-cols-3 */
    gap: 140px; /* sm:gap-[140px] */
  }

  @media (min-width: 1280px) {
    /* xl */
    grid-template-columns: repeat(4, 1fr); /* xl:grid-cols-4 */
  }
`;

const FooterList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  @media (min-width: 640px) {
    align-items: start;
  }
`;

export default function Footer() {
  return (
    <footer className="bg-[#081122] py-16">
      {/* Conteudo Footer */}
      <div className="container mx-auto flex flex-col gap-8">
        <GridFooter>
          {/* Redes Sociais */}
          <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-1">
            <NavLink to="/">
              <img src={Logo} alt="FE Choices" className="h-18 sm:h-15" />
            </NavLink>
            <div className="flex gap-3 mt-5">
              <SocialIcons link={"https://www.twitter.com/"} icon={iconTwitter}/>
              <SocialIcons link={"https://www.facebook.com/"} icon={iconFacebook}/>
              <SocialIcons link={"https://www.instagram.com/"} icon={iconInstagram}/>
            </div>
          </div>

          {/* Itens de Navegacao */}
          <div className="flex flex-col gap-5 text-lg">
            <h3 className="text-white font-semibold uppercase">Links úteis</h3>
            <FooterList>
              <NavItem text={"Palpites"} page={"/palpites"} />
              <NavItem text={"Roleta"} page={"/roleta"} />
              <NavItem text={"Fantasy"} page={"/fantasy"} />
              <NavItem text={"Ao Vivo"} page={"/aovivo"} />
              <NavItem text={"Circuito"} page={"/circuito"} />
            </FooterList>
          </div>
          <div className="flex flex-col gap-5 text-lg">
            <h3 className="text-white font-semibold uppercase">Informações</h3>
            <FooterList>
              <NavItem text={"Sobre Nós"} page={"/about"} />
              <NavItem text={"Afiliados"} page={"/afiliados"} />
              <NavItem text={"Prêmios"} page={"/premios"} />
              <NavItem text={"Suporte"} page={"/suporte"} />
              <NavItem text={"Blog"} page={"/blog"} />
            </FooterList>
          </div>

          {/* Imagem Footer */}
          <img
            src={ilustrationFooter}
            alt="Pessoa em pé olhando por um binóculo"
            className="hidden xl:block"
          />
        </GridFooter>

        {/* Texto Footer */}
        <p className="text-center my-3">
          &copy; 2024 fechoices.com | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
