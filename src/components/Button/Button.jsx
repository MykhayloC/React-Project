import './Button.css';

const Button = (props) => {

    return (
        <button className={props.myClass} onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;