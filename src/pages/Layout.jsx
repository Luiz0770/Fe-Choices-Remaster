import Header from ".././components/Layout/Header";
import Footer from ".././components/Layout/Footer";
import SideBar from ".././components/Layout/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

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
