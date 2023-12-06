import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Layout from "../../components/layout/layout";
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
  });

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const handlerNameFilterChange = (event) => {
    setFilter((value) => ({ ...value, name: event.target.value }));
  };

  const handleSubmitFilter = async (event) => {
    event.preventDefault();
    getLatestAdverts(filter).then((adverts) => setAdverts(adverts));
  };

  return (
    <Layout title="Lista de Anuncios">
      <div className="advertsPage">
        <form onSubmit={handleSubmitFilter}>
          <input
            onChange={handlerNameFilterChange}
            type="text"
            value={filter.name}
          />
          <Button type="submit" $variant="primary">
            search
          </Button>
        </form>
        {adverts.length ? (
          <ul
            style={{
              listStyle: "none",
              border: "1px solid black",
              padding: 24,
            }}
          >
            {adverts.map((ad, id) => (
              <Link to={`/adverts/${id}`}>
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
              </Link>
            ))}
          </ul>
        ) : (
          <Button $variant="primary">Create your first ad</Button>
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;
