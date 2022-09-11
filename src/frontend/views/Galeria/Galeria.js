import "./Galeria.css";
import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { SubBanner } from "../../components/SubBanner/SubBanner";
import { SUBBANNER_IMG } from "../../../services";
import { ITEMS_GALERY } from "../../../services";
import { Link } from "react-router-dom";
import { ImgGaleria } from "../../components/ImgGaleria/ImgGaleria";

const Galeria = () => {
  const [showImgGaleria, setShowImgGaleria] = useState(false);
  const [showImg, setShowImg] = useState("");

  return (
    <Layout>
      <SubBanner nameSection="Galeria" img={SUBBANNER_IMG[0].galeriaFoto} />
      <ImgGaleria
        setShowImgGaleria={setShowImgGaleria}
        showImgGaleria={showImgGaleria}
        onHide={() => setShowImgGaleria(false)}
        showImg={showImg}
      />
      <section className="container-galeria">
        {ITEMS_GALERY.map((item) => {
          return (
            <Link
              to="/galeria"
              onClick={() => {
                setShowImgGaleria(true);
                setShowImg({ ...item });
                console.log(item);
              }}
            >
              <div>
                <img src={item.img} alt={item.alt} />
              </div>
            </Link>
          );
        })}
      </section>
    </Layout>
  );
};

export { Galeria };
