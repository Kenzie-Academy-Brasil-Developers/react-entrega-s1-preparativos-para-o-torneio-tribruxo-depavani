import "./style.css";

const Home = ({ randomStudents }) => {
  return (
    <div className="Home">
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <button onClick={randomStudents}>Começar!</button>
    </div>
  );
};

export default Home;
