import classes from './ButtonReg.module.css';

const ButtonCTA = props => {
  return (
    <button
      className={`${classes.btnCTA} ${props.class}`}
      onClick={props.onClick || props.onAddToCart}
      onTouchStart={props.onTouch}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default ButtonCTA;
