import AllCards from "../AllCards";

const CardsPage = ({ renderStudents }) => {
  return (
    <div className="CardsPage">
      <AllCards renderStudents={renderStudents} />
    </div>
  );
};

export default CardsPage;
