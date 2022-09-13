import "./Footer.css";
import {
  IconInstagram,
  WhatsappIcon,
  FacebookIcon,
  MailIcon,
} from "../Icons/Icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="./logo.png" alt="logo de circo del litoral" />
      </div>
      <div>
        <IconInstagram />
        <WhatsappIcon />
        <FacebookIcon />
        <MailIcon />
      </div>
      <h5>
        Sitio desarrollado por{" "}
        <a
          href="https://gabrielalberini.com.ar"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel Alberini
        </a>
      </h5>
    </footer>
  );
};

export { Footer };
