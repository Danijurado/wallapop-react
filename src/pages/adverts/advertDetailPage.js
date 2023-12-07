import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Layout from "../../components/layout/layout";
import { getAdvert, deleteAdvert } from "./service";
import "./advertDetailPage.css";

function AdvertDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    getAdvert(params.advertsId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [navigate, params.advertsId]);

  const handleDelete = () => {
    // Eliminar el anuncio
    deleteAdvert(params.advertsId)
      .then(() => {
        // Redirigir a la página de nuevos anuncios después de eliminar
        navigate("/adverts");
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  };

  return (
    <Layout title="Detalle del anuncio">
      <div>
        {advert && (
          <div className="form">
            <img
              src={advert.photo}
              alt={advert.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />

            <p>Nombre: {advert.name}</p>

            <p>Precio: {advert.price}</p>
            <p>Venta: {advert.sale ? "Sí" : "No"}</p>
            <p>Tags: {advert.tags.join(", ")}</p>
          </div>
        )}
        <Button onClick={handleDelete} $variant="primary">
          Delete
        </Button>
      </div>
    </Layout>
  );
}

export default AdvertDetailPage;
