import "./Intervenciones.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";

const Intervenciones = () => {
  return (
    <Layout>
      <SubBanner
        nameSection="Intervenciones"
        img={SUBBANNER_IMG[4].galeriaFoto}
      />
    </Layout>
  );
};

export { Intervenciones };
