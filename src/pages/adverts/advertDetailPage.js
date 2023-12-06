import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

function AdvertDetailPage() {
  const params = useParams();

  return (
    <Layout title="advert detail">
      <div>detail advert {params.advertsID}</div>
    </Layout>
  );
}

export default AdvertDetailPage;
