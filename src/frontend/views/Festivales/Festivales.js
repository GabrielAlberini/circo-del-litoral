import "./Festivales.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";

const Festivales = () => {
  return (
    <Layout>
      <SubBanner nameSection="Festivales" img={SUBBANNER_IMG[3].galeriaFoto} />
    </Layout>
  );
};

export { Festivales };
