import "./Banner.css";
import fotoBanner from "../../assets/img/img-banners/banner.png";

const Banner = ({ nameSection }) => {
  return (
    <>
      <section className="cont-main-banner">
        <div className="cont-img-banner"></div>
        <img src={fotoBanner} alt="foto de banner" />
      </section>
    </>
  );
};

export { Banner };
