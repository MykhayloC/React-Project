import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from "./redux/counterSlice.js";
import {useState} from "react";
import './App.css';




function App() {
    const [difference, setDifference] = useState(1);
    const dispatch = useDispatch();
    const {value} = useSelector(store => store.counter);
    
    const handleIncrement = () => {
      dispatch(increment(difference))
    }
    
    return (
        <div className='app'>
            <input className='input-field' type="number" value={difference} onChange={(e) => setDifference(e.target.value)}/>
            <h2>Counter value:</h2>
            <p><span className='counter-value'>{value}</span></p>
            <button className='btn increment-btn' onClick={handleIncrement}>Increment</button>
            <button className='btn decrement-btn' onClick={() => dispatch(decrement(difference))}>Decrement</button>
            <button className='btn reset-btn' onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default App
