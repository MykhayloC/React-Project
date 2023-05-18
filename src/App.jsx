import Button from "./components/Button/Button.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
    return (
        <div>
            <Header text={"Couple of useless buttons"}></Header>
            <div className={"buttons"}>
                <Button text={"SUBMIT"} myClass={"button btn-submit"}></Button>
                <Button text={"RESET"} myClass={"button btn-reset"}></Button>
            </div>
        </div>
    );
}

export default App
