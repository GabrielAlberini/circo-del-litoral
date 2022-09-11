import "./ImgGaleria.css";
import { Modal } from "react-bootstrap";
import { CloseIcon } from "../Icons/Icons";

const ImgGaleria = ({ showImgGaleria, setShowImgGaleria, showImg }) => {
  console.log(showImg);
  return (
    <Modal
      show={showImgGaleria}
      onHide={() => setShowImgGaleria(false)}
      size="lg"
      centered
      dialogClassName="container-menu-hamburguesa"
    >
      <div
        className="close-detail"
        onClick={() => {
          setShowImgGaleria(false);
        }}
      >
        <CloseIcon />
      </div>
      <div
        className="close-detail"
        onClick={() => {
          setShowImgGaleria(false);
        }}
      ></div>
      <div className="container-img-galeria">
        <img src={showImg.img} alt="asdasd" />
      </div>
    </Modal>
  );
};

export { ImgGaleria };
