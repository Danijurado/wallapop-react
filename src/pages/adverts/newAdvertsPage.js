import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Layout from "../../components/layout/layout";
import { createAdvert } from "./service";
import "./newAdvertsPage.css";

function NewAdvertsPage() {
  const [fetch, setFetch] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("sale", event.target.sale.value === "compra");
    formData.append("price", event.target.price.value);
    formData.append("tags", event.target.tags.value);
    formData.append("photo", event.target.photo.files[0]);

    try {
      setFetch(true);
      await createAdvert(formData);
      setFetch(false);
      const to = "/";
      navigate(to);
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  const disabled = fetch;

  return (
    <Layout title="Nuevo anuncio">
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Nombre:
            <input type="text" name="name" required />
          </label>
          <br />

          <label>
            Compra / Venta:
            <select name="sale" required>
              <option value="">Selecciona</option>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
            </select>
          </label>
          <br />

          <label>
            Tags disponibles:
            <select name="tags" multiple required>
              <option value="lifestyle">Lifestyle</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>
          <br />

          <label>
            Precio:
            <input type="number" name="price" required />
          </label>
          <br />

          <label>
            Foto:
            <input type="file" name="photo" accept="image/*" />
          </label>
          <br />

          <Button type="submit" $variant="primary" disabled={disabled}>
            Add
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default NewAdvertsPage;
