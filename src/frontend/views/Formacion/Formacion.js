import "./Formacion.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";

const Formacion = () => {
  return (
    <Layout>
      <SubBanner nameSection="Formación" img={SUBBANNER_IMG[3].galeriaFoto} />
    </Layout>
  );
};

export { Formacion };
