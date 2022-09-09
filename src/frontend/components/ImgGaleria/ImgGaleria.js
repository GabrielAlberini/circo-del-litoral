import "./ImgGaleria.css";
import { Modal } from "react-bootstrap";

const ImgGaleria = ({ setShowImgGaleria, img }) => {
  return (
    <Modal size="lg" centered dialogClassName="container-menu-hamburguesa">
      <div
        className="close-detail"
        onClick={() => {
          setShowImgGaleria(false);
        }}
      ></div>
      <div>{img}</div>
    </Modal>
  );
};

export { ImgGaleria };
