import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { ITEMS_USERS } from "../../../backend/services/services";

const Slider = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="cont-section-slider">
      <OwlCarousel {...options}>
        {ITEMS_USERS.map((item) => {
          const { img, description, name, rol } = item;
          return (
            <div key={name} className="item">
              <img src={img} alt={`Foto de ${name}`} />
              <h4>{name}</h4>
              <p>{description}</p>
              <h5>{rol}</h5>
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
};

export { Slider };
