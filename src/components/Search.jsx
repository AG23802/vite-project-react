import { useEffect, useState } from "react";

const url = "http://localhost:8080/protected/raw-json";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc0Nzk1MjU4MiwiZXhwIjoxNzQ4MDM4OTgyfQ.KN67bVZFwh7V9H0ARQmpyqyoda010doCx2ZGPFx491U";

export default function Search({setFruitData}) {
  const [query, setQuery] = useState("Rosaceae");

  useEffect(() => {
    const fetchFruits = async () => {
      const res = await fetch(url, {
        method: "GET", // or 'POST', 'PUT', etc.
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json()
      setFruitData(data)
    };

    fetchFruits();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Family"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
