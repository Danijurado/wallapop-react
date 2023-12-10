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
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={filter.name}
              onChange={handlerNameFilterChange}
            />
          </label>

          <Button type="submit" $variant="primary">
            Buscar
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
            {adverts.map((ad) => (
              <Link to={`/adverts/${ad.id}`} className="link" key={ad.id}>
                <li>
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
          <Button as={Link} to="/adverts/new" $variant="primary">
            Crear tu primer anuncio
          </Button>
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;
