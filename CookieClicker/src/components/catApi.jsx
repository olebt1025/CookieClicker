import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aktivIndex, setAktivIndex] = useState(0);

  useEffect(() => {
    const hentData = async () => {
      try {
        const response = await fetch(
          "https://catfact.ninja/facts?limit=5"
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente facts");
        }

        const result = await response.json();

        // 👇 KRITISK LINJE
        setFacts(result.data.map(item => item.fact));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    hentData();
  }, []);

  useEffect(() => {
    if (facts.length === 0) return;

    const interval = setInterval(() => {
      setAktivIndex(prev => (prev + 1) % facts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [facts]);

  return (
    <div>
      <h2>Cat Facts 🐱</h2>

      {loading && <p>Laster...</p>}
      {error && <p>Feil: {error}</p>}

      {!loading && !error && facts.length > 0 && (
        <p style={{ fontWeight: "bold" }}>
          {facts[aktivIndex]}
        </p>
      )}
    </div>
  );
}

export default CatFacts;