import FilterContainer from "./components/FilterContainer/FilterContainer";
import InputContainer from "./components/InputContainer/InputContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import Task from "./components/Task/Task";
import TaskContainer from "./components/TaskContainer/TaskContainer";

function App() {
  return (
    <MainContainer>
      <InputContainer />
      <TaskContainer>
        <Task />
      </TaskContainer>
      <FilterContainer />
    </MainContainer>
  );
}

export default App;
