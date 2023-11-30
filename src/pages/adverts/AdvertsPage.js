import { useEffect, useState } from "react";
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);
  return (
    <div className="advertsPage">
      <h1>Lista de Anuncios</h1>
      <ul style={{ listStyle: "none", border: "1px solid black", padding: 24 }}>
        {adverts.map((ad) => (
          <li key={ad.id}>
            <img
              src={ad.photo}
              alt={ad.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />

            <p>Nombre: {ad.name}</p>
          
            <p>Precio: {ad.price}</p>
            <p>Venta: {ad.sale ? "Sí" : "No"}</p>
            <p>Tags: {ad.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
