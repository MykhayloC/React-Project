import {useState} from "react";
import Button from "./components/Button/Button.jsx";
import Header from "./components/Header/Header.jsx";
import Counter from "./components/Counter/Counter.jsx";

function App() {

    const [value, setValue] = useState(0);

    const handleIncrement = () => setValue(value + 1);
    const handleDecrement = () => setValue(value - 1);

    return (
        <div>
            <Header>Counter</Header>
            <Counter>{value}</Counter>
            <div className={"buttons"}>
                <Button myClass={"button btn-submit"} onClick = {handleIncrement}>To increase value</Button>
                <Button myClass={"button btn-reset"}  onClick = {handleDecrement}>To decrease value</Button>
            </div>
        </div>
    );
}

export default App
