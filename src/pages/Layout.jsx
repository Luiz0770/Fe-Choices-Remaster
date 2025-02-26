import Header from ".././components/Layout/Header";
import Footer from ".././components/Layout/Footer";
import SideBar from ".././components/Layout/SideBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função para fechar caso a tela já esteja pequena

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]); // Adicionei `setIsOpen` como dependência

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`transition-transform duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
