import Button from "./components/Button/Button.jsx";

function App() {
  return (
      <div>
        <h1>Some useless buttons</h1>
        <Button text={"SUBMIT"} myClass={"button btn-submit"}></Button>
        <Button text={"RESET"} myClass={"button btn-reset"}></Button>
      </div>
  );
}

export default App
