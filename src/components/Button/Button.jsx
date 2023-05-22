import './Button.css';

const Button = (props) => {
    const {myClass, onClick} = props;
    return (
        <button className={myClass} onClick={onClick}>{props.children}</button>
    );
};

export default Button;