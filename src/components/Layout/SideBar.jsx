import { List, Drawer, Card } from "@material-tailwind/react";
import NavItem from "../UI/NavItem";
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
  iconPontos,
  arrow,
} from "../../share/icons";
import styled from "styled-components";

const BtnSideBar = styled.button`
  background-color: #4477bb;
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 4px;
  width: max-content;
  margin: 8px auto;
  color: white;
  font-weight: bold;

  &:hover {
    scale: 1.05;
    transition: 0.2s;
  }
`;

export default function SideBar({ isOpen, setIsOpen }) {
  return (
    <Drawer
      open={isOpen}
      // onClose={() => setIsOpen(!isOpen)}
      className="fixed top-27 w-64 shadow-xl"
    >
      <Card className="h-full w-full p-4 gap-5 flex flex-col bg-[#123] border-r border-[#30455A]">
        <BtnSideBar>
          <span>GANHE 20</span>
          <img src={iconPontos} />
        </BtnSideBar>
        <div className="px-4 flex justify-between">
          Populares
          <img src={arrow} />
        </div>
        <div>
          <List className="flex px-4 pb-6 pt-3 gap-3 overflow-y-auto border-b border-[#30455A]">
            <NavItem icon={iconPalpites} text={"Palpites"} page={"/palpites"} />
            <NavItem icon={iconRoleta} text={"Roleta"} page={"/roleta"} />
            <NavItem icon={iconFantasy} text={"Fantasy"} page={"/fantasy"} />
            <NavItem icon={iconAoVivo} text={"Ao Vivo"} page={"/aovivo"} />
            <NavItem icon={iconCircuitos} text={"Circuito"} page={"/circuito"} />
          </List>
          <List className="flex-1 px-4 pt-6 gap-3 overflow-y-auto">
            <NavItem icon={iconSobre} text={"Sobre Nós"} page={"/about"} />
            <NavItem icon={iconAfiliados} text={"Afiliados"} page={"/afiliados"} />
            <NavItem icon={iconPremios} text={"Prêmios"} page={"/premios"} />
            <NavItem icon={iconSuporte} text={"Suporte"} page={"/suporte"} />
            <NavItem icon={iconBlog} text={"Blog"} page={"/blog"} />
          </List>
        </div>
      </Card>
    </Drawer>
  );
}