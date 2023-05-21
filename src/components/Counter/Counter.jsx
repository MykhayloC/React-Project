import './Counter.css'
const Counter = (props) => {
    return (
        <>
            <p>Counter value: <span>{props.children}</span></p>
        </>
    );
}

export default Counter;
