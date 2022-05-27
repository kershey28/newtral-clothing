import { useContext } from 'react';

import SVGStar from '../icons/SVGStar';

import classes from './Product.module.css';
import { makeID } from '../../helpers/helpers';

import ProductForm from '../form/ProductForm';
import CartContext from '../../store/cart-context';

const Product = props => {
  const noOfStars = props.rate;
  const rateStar = [...Array(noOfStars)].map(el => <SVGStar key={makeID()} />);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      color: props.color,
      price: props.price,
    });
  };

  return (
    <li className={classes.container}>
      <div className={classes.imgBox}>
        {props.disabled && <p className={classes.soldOut}>Sold out</p>}
        <div className={classes.circle}></div>
        <img
          src={props.image}
          alt={`${props.color} product`}
          className={classes.img}
        />
      </div>

      <div className={classes.content}>
        <h3 className={`${classes.text} heading-3`}>{props.color}</h3>
        <div className={classes.svgStars}>{rateStar}</div>
      </div>

      <ProductForm
        onAddToCart={addToCartHandler}
        id={props.id}
        disabled={props.disabled}
      />
    </li>
  );
};

export default Product;
