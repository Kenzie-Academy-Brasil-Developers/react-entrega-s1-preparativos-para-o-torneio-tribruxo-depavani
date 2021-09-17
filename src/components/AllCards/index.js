import Card from "../Card";
import "./style.css";

const AllCards = ({ renderStudents }) => {
  return (
    <div className="AllCards">
      {renderStudents.map((students) => {
        return <Card students={students} />;
      })}
    </div>
  );
};

export default AllCards;
