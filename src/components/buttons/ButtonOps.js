import classes from './ButtonOps.module.css';
import SVGShop from './../icons/SVGShop';
import { SVGPlus, SVGMinus, SVGClose } from '../icons/SVGOps';

export const ButtonOpsShop = props => {
  return (
    <button className={classes.btnOps} disabled={props.disabled}>
      <SVGShop class={classes.svg} />
    </button>
  );
};

export const ButtonOpsPlus = props => {
  return (
    <button
      className={`${classes.btnOps} ${props.class}`}
      onClick={props.onClick}
      disabled={props.limited}
    >
      <SVGPlus class={classes.svg} />
    </button>
  );
};

export const ButtonOpsMinus = props => {
  return (
    <button
      className={`${classes.btnOps} ${props.class}`}
      onClick={props.onClick}
    >
      <SVGMinus class={classes.svg} />
    </button>
  );
};

export const ButtonClose = props => {
  return (
    <button
      className={`${classes.btnOps} ${props.class}`}
      onClick={props.onClick}
    >
      <SVGClose class={classes.svg} />
    </button>
  );
};
