//import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Layout from "../../components/layout/layout";
import { deleteAdvert } from "./service";
import "./advertDetailPage.css";
import { useSelector } from "react-redux";
import { getReduxAdvert } from "../../store/selectors";

function AdvertDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  
  const advert = useSelector(getReduxAdvert(params.advertId));

  /*
  useEffect(() => {
    getAdvert(params.advertsId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [navigate, params.advertsId]);
*/

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este anuncio?"
    );

    if (confirmDelete) {
      deleteAdvert(params.advertsId)
        .then(() => {
          navigate("/adverts");
        })
        .catch((error) => {
          if (error.status === 404) {
            navigate("/404");
          }
        });
    }
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
