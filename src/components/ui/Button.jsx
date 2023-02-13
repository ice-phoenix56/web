const Button = (props) => {

    return (
        <button className="button-green">
           {props.text && <span>{props.text}</span>}
        </button>
    );
};

export default Button