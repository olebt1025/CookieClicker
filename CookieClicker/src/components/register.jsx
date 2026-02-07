 import { useState } from "react";

function UserRegister() {
  const [brukere, setBrukere] = useState([
    { brukernavn: "ola Normann", email: "ola.normann@norge.no" },
    { brukernavn: "Torleif", email: "torleif@kodehode.no" },
    { brukernavn: "Jan Egil", email: "jan.egil@kodehode.no"},
    { brukernavn: "Sander", email:"sander@kodeode.no"},
  ]);

  const [brukernavn, setBrukernavn] = useState("");
  const [epost, setEpost] = useState("");

  const leggTilBruker = () => {
    if (!brukernavn || !epost) return;

    setBrukere([
      ...brukere,
      { brukernavn, epost }
    ]);

    setBrukernavn("");
    setEpost("");
  };

  return (
    <div>
      <h2>Brukerregistrering</h2>

      <input
        type="text"
        placeholder="Brukernavn"
        value={brukernavn}
        onChange={(e) => setBrukernavn(e.target.value)}
      />

      <input
        type="email"
        placeholder="E-post"
        value={epost}
        onChange={(e) => setEpost(e.target.value)}
      />

      <button onClick={leggTilBruker}>Legg til</button>

      <ul>
        {brukere.map((bruker, index) => (
          <li key={index}>
            <strong>-{bruker.brukernavn}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserRegister;

