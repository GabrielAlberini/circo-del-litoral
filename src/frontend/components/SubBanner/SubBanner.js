import "./SubBanner.css";

const SubBanner = ({ nameSection, img }) => {
  console.log(img);
  return (
    <>
      <section
        className="cont-main-subbanner"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="cont-img-subbanner"></div>
        <h2>{nameSection}</h2>
      </section>
    </>
  );
};

export { SubBanner };
