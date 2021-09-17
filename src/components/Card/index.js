import "./style.css";

const Card = ({ students }) => {
  const { image, name, house } = students;

  //console.log("a casa é:", house);

  return (
    <div className={`${house}`}>
      <div className="img">
        <img src={image} alt={""} />
      </div>

      <div className="characteristics">
        <span>{name}</span>
        <br />
        <span>{house}</span>
      </div>
    </div>
  );
};

export default Card;
