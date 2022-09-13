import "./Animaciones.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";

const Animaciones = () => {
  return (
    <Layout>
      <SubBanner nameSection="Animaciones" img={SUBBANNER_IMG[3].galeriaFoto} />
    </Layout>
  );
};

export { Animaciones };
