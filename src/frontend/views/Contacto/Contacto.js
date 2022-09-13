import "./Contacto.css";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";
import {
  IconInstagram,
  WhatsappIcon,
  FacebookIcon,
  MailIcon,
} from "../../components/Icons/Icons";

const Contacto = () => {
  return (
    <Layout>
      <SubBanner nameSection="Contacto" img={SUBBANNER_IMG[0].galeriaFoto} />
      <section className="container-contact">
        <h2>Puedes encontrarnos en nuestras redes sociales</h2>
        <article>
          <a
            href="https://www.instagram.com/circo.del.litoral/"
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="https://wa.me/+5493541534520?text=Hola me gustaría comunicarme con Circo del Litoral."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon />
          </a>
          <a
            href="https://www.facebook.com/circo.del.litoral"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>

          <a
            href="mailto:repiqueterea@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon />
          </a>
        </article>
      </section>
    </Layout>
  );
};

export { Contacto };
