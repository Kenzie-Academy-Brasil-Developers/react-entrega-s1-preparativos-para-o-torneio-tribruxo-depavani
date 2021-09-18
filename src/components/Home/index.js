import "./style.css";

const Home = ({ randomStudents }) => {
  return (
    <div className="Home">
      <h4> Bem vindo ao</h4>
      <h1>Torneio Tribruxo</h1>
      <button onClick={randomStudents}>Começar!</button>
    </div>
  );
};

export default Home;
