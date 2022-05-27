import { useContext, useEffect, useState } from 'react';

import classes from './CartDisplay.module.css';

import SVGCart from '../components/icons/SVGCart';
import CartContext from '../store/cart-context';

const CartDisplay = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [cartItemsIsEmpty, setCartItemsIsEmpty] = useState(true);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      setCartItemsIsEmpty(true);
      return;
    }
    setBtnIsHighlighted(true);
    setCartItemsIsEmpty(false);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={`${btnClasses} ${props.class}`} onClick={props.onClick}>
      <span className={classes.icon}>
        <SVGCart />
      </span>
      {!cartItemsIsEmpty && (
        <span className={classes.badge}>{numberOfCartItems}</span>
      )}
    </button>
  );
};

export default CartDisplay;
