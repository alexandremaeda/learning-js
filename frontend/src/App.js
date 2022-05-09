import React, { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/background.jpg";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState(["Web", "Mobile"]);

  const handleAddProject = () =>
    setProjects([...projects, `New ${Date.now()}`]);

  return (
    <>
      <Header title="Home" />

      <img width="400" src={backgroundImage} alt="backgroundImage" />

      <ul>
        {projects.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
