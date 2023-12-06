import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { getAdvert } from "./service";

function AdvertDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    getAdvert(params.advertsId).then((advert) =>
      setAdvert(advert)
    ).catch((error) => {
      if (error.status === 404) {
        navigate("/404");
      }
    })
  }, [navigate, params.advertsId]);

  return (
    <Layout title="advert detail">
      <div>
        {advert && (
          <div>
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
      </div>
    </Layout>
  );
}

export default AdvertDetailPage;
