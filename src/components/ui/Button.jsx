const Button = (props) => {

    return (
        <button className="button-pink">
           {props.text && <span>{props.text}</span>}
        </button>
    );
};

export default Button