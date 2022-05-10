import api from "./services/api";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  const handleAddProject = () =>
    setProjects([...projects, `New ${Date.now()}`]);

  return (
    <>
      <Header title="Home" />

      <ul>
        {projects.map((data) => (
          <li key={data.title}>{data.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
