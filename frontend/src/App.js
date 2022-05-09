import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState(["Web", "Mobile"]);

  const handleAddProject = () =>
    setProjects([...projects, `New ${Date.now()}`]);

  return (
    <>
      <Header title="Home" />
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
