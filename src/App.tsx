import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HashRouter } from "react-router-dom";
import { TaskContext } from "./Context/context";
import { ITask } from "./mockData";

function App() {
  const storageTasks: ITask[] = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );
  const [tasks, setAllTasks] = useState<ITask[]>(storageTasks);

  function addTask(newTask: ITask) {
    setAllTasks((tasks) => [...tasks, newTask]);
  }

  function updateTasks(updatedTasks: ITask[]) {
    setAllTasks(updatedTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <HashRouter>
      <TaskContext.Provider value={{ tasks, addTask, updateTasks }}>
        <Header />
        <Main />
        <Footer />
      </TaskContext.Provider>
    </HashRouter>
  );
}

export default App;
