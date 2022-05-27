import { useContext } from 'react';
import classes from './Cart.module.css';

import CartItem from './CartItem';
import Modal from '../../portals/Modal';
import CartContext from '../../store/cart-context';
import ButtonCTA from './../buttons/ButtonCTA';
import ButtonGhost from './../buttons/ButtonGhost';
import { formatCurrency } from '../../helpers/helpers';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          color={item.color}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          limited={item.limited}
        />
      ))}
    </ul>
  );

  const totalAmount = formatCurrency(cartCtx.totalAmount, 'en-US', 'PHP');

  return (
    <Modal onClose={props.onClose} onCloseFeature={props.onCloseFeature}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes.totalAmount}>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <ButtonGhost
          class={classes.button}
          onClose={props.onClose}
          text="Close"
        />
        {hasItems && <ButtonCTA class={classes.button} text="Order" />}
      </div>
    </Modal>
  );
};

export default Cart;
