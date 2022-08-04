import "./Title.css";

const Title = ({ nameSection }) => {
  return (
    <div className="cont-main-title">
      <h1 className="main-title">{nameSection}</h1>
    </div>
  );
};

export { Title };
