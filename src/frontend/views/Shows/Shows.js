import "./Shows.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";

const Shows = () => {
  return (
    <Layout>
      <SubBanner nameSection="Shows" img={SUBBANNER_IMG[1].galeriaFoto} />
    </Layout>
  );
};

export { Shows };
