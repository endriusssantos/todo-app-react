import { useState } from "react";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import InputContainer from "./components/InputContainer/InputContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import TaskContainer from "./components/TaskContainer/TaskContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    if (id === "completed") {
      setTasks(tasks.filter((task) => !task.completed));
    } else {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <MainContainer>
      <InputContainer addTask={addTask} />
      <TaskContainer
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <FilterContainer />
    </MainContainer>
  );
}

export default App;
