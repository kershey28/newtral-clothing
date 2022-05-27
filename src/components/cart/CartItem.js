import classes from './CartItem.module.css';

import { ButtonOpsPlus, ButtonOpsMinus } from './../buttons/ButtonOps';
import { formatCurrency } from '../../helpers/helpers';

const CartItem = props => {
  const price = formatCurrency(props.price, 'en-US', 'PHP');

  return (
    <li className={classes['cart-item']}>
      <div>
        <h3 className={`${classes.name} heading-3`}>{props.name}</h3>
        <p className={classes.color}>{props.color}</p>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <ButtonOpsMinus class={classes.button} onClick={props.onRemove} />
        <ButtonOpsPlus
          class={classes.button}
          onClick={props.onAdd}
          limited={props.limited}
        />
      </div>
    </li>
  );
};

export default CartItem;
