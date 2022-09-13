import "./QuienesSomos.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";
import { USERS } from "../../../services";

const QuienesSomos = () => {
  return (
    <Layout>
      <SubBanner
        nameSection="Quienes somos"
        img={SUBBANNER_IMG[1].galeriaFoto}
      />
      <section className="container-quienes-somos">
        {USERS.map((user) => {
          const { id, img, name, rol, description, socialLink } = user;
          return (
            <div key={id} className="container-user">
              <div className="container-img-user">
                <img src={img} alt="user" />
              </div>
              <div className="container-desc-user">
                <h3>{name}</h3>
                <h4>{rol}</h4>
                <p>{description}</p>
                <a href={socialLink} target="_blank" rel="noreferrer">
                  Ver instagram
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export { QuienesSomos };
