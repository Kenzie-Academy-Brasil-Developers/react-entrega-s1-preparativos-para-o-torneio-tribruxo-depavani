import { useEffect, useState } from "react";
import Home from "../Home";
import CardsPage from "../CardsPage";
import "./style.css";

function Initial() {
  const [students, setStudents] = useState([]);

  const linkApi = "https://hp-api.herokuapp.com/api/characters/students";
  useEffect(() => {
    fetch(linkApi)
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  const [changingPage, setChangingPage] = useState(false);
  const [renderStudents, SetRenderStudents] = useState([]);

  const randomStudents = () => {
    const rndArr = [];
    const checkingHouse = [];
    console.log(students);
    for (let i = 0; i <= 2; i) {
      const rnd = Math.floor(Math.random() * students.length);
      if (!checkingHouse.includes(students[rnd].house)) {
        rndArr.push(students[rnd]);
        checkingHouse.push(students[rnd].house);
        i++;
      }
    }
    SetRenderStudents(rndArr);
    setChangingPage(true);
  };

  return (
    <div className="App">
      {!changingPage && <Home randomStudents={randomStudents} />}
      {changingPage && (
        <CardsPage
          renderStudents={renderStudents}
          randomStudents={randomStudents}
        />
      )}
    </div>
  );
}

export default Initial;
