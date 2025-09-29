import InputContainer from "./components/InputContainer/InputContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import Task from "./components/Task/Task";
import TaskContainer from "./components/TaskContainer/TAskContainer";

function App() {
  return (
    <MainContainer>
      <InputContainer />
      <TaskContainer>
        <Task />
      </TaskContainer>
    </MainContainer>
  );
}

export default App;
