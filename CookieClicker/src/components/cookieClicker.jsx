import { useState } from "react";
import Cookie1 from "/Cookie1.png";
import Cookie2 from "/Cookie2.png";

function CookieClicker() {
  const [poeng, setPoeng] = useState(0);
  const [trykket, setTrykket] = useState(false);

  const klikkKjeks = () => {
    setPoeng((prev) => prev + 1);
    setTrykket(true);

    setTimeout(() => {
      setTrykket(false);
    }, 100);
  };

  return (
    <div>
      <h2>Cookie Clicker</h2>
      <p>Poeng: {poeng}</p>

      <img
        src={trykket ? Cookie2 : Cookie1}
        alt="Cookie"
        onClick={klikkKjeks}
        style={{ cursor: "pointer", width: "200px" }}
      />
    </div>
  );
}

export default CookieClicker;