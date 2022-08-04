import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Slider } from "../../components/Slider/Slider";
import imgHome1 from "../../assets/img/img-home/circo1.jpg";
import imgHome2 from "../../assets/img/img-home/circo2.jpg";
import imgHome3 from "../../assets/img/img-home/circo3.jpg";
import imgHome4 from "../../assets/img/img-home/circo4.jpg";
import {
  SECTION_HOME,
  GALERY_CONTACT_HOME,
} from "../../../backend/services/services";

const Home = () => {
  return (
    <Layout>
      <Banner />
      {SECTION_HOME.map((section) => {
        const { invSection, description, title, redirection, img } = section;

        return (
          <section key={title} className={`main-section-home ${invSection}`}>
            <article className="cont-data-section-home">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="btn-main">Quiero más!</button>
            </article>
            <article className="cont-data-section-home-img">
              <img src={img} alt="imagen de inicio 1" />
            </article>
          </section>
        );
      })}
      <section className="main-section-home text-white">
        {GALERY_CONTACT_HOME.map((section) => {
          const { description, title, img } = section;
          return (
            <article
              key={title}
              className="cont-data-section-home text-align"
              style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="btn-main btn-center">Quiero más!</button>
            </article>
          );
        })}
      </section>
      <Slider />
      <section className="section-imgs-home">
        <img src={imgHome1} alt="imagen de circo" />
        <img src={imgHome2} alt="imagen de circo" />
        <img src={imgHome3} alt="imagen de circo" />
        <img src={imgHome4} alt="imagen de circo" />
      </section>
    </Layout>
  );
};

export { Home };
