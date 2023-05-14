import './Button.css'

const Button = (props) => {
    return <button className={props.myClass}>{props.text}</button>;
};

export default Button;