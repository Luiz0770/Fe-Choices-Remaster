import { SpinWheel } from "react-spin-wheel";
import "./Roleta.css";
import { Logo } from "../../shared/icons";
import { useEffect, useState } from "react";

export default function Roleta() {
  const [size, setSize] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSize(300);
      } else {
        setSize(500);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <SpinWheel
        items={[
          "20 pontos",
          "10 pontos",
          "1 Palpites",
          "50 pontos",
          "Sem Premio",
          "5 pontos",
          "15 pontos",
          "Giro grátis",
        ]}
        size={size}
        spinTime={4000}
        itemColors={["#22374C", "#596E84"]}
        borderColor="#081122"
        spinActionName={<img src={Logo} className="w-8 md:w-10" />}
        onFinishSpin={(item) => {
          alert(item);
        }}
      />
    </>
  );
}
