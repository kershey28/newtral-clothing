import classes from './ButtonReg.module.css';

const ButtonGhost = props => {
  return (
    <button
      className={` ${classes.btnGhost} ${props.class} `}
      onClick={props.onClose || props.onClick || props.onShowModal}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default ButtonGhost;
