import "./style.css";

const Card = ({ students }) => {
  const { image, name, house } = students;

  return (
    <div className="card">
      <div className="img">
        <img src={image} alt={""} />
      </div>

      <div className="characteristics">
        <p className="Name">Nome - {name}</p>
        <p className="House">Casa - {house}</p>
      </div>
    </div>
  );
};

export default Card;
