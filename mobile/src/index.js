// color scheme
// https://colorpalettes.net/color-palette-1978/

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((res) => {
      setProjects(res.data);
      console.log(res.data);
    });
  }, []);

  const handleAddProject = async () => {
    const res = await api.post("projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Alexandre Maeda",
    });

    setProjects([...projects, res.data]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fdeb37" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e26",
  },

  project: {
    color: "#fdeb37",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#1c1e26",
    fontWeight: "bold",
    fontSize: 16,
  },
});
