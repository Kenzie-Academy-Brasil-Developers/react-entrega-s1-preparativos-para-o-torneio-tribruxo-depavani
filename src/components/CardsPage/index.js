import AllCards from "../AllCards";

const CardsPage = ({ renderStudents, randomStudents }) => {
  return (
    <div className="CardsPage">
      <AllCards renderStudents={renderStudents} />
      <button onClick={randomStudents}>Tentar Novamente</button>
    </div>
  );
};

export default CardsPage;
