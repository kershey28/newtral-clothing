import { useRef, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CartContext from '../../store/cart-context';
import { makeID } from '../../helpers/helpers';
import ButtonCTA from '../buttons/ButtonCTA';
import HighlightCircle from './../icons/HighlightCircle';

import classes from './Features.module.css';

const FeaturedItem = props => {
  ///////////////////////////////////////
  // Animation
  const squareGhostRef = useRef(null);
  const squareFillRef = useRef(null);
  const cartCtx = useContext(CartContext);
  const location = useLocation();

  const [isSquareAnimated, setSquareAnimated] = useState(false);
  const squareGhostClass = isSquareAnimated ? 'moveInBottom' : 'hidden';
  const squareFillClass = isSquareAnimated ? 'moveInRight' : 'hidden';

  const [gotFeaturedProduct, setGotFeaturedProduct] = useState(false);

  const addToCartHandler = () => {
    if (gotFeaturedProduct) return;

    if (!gotFeaturedProduct) {
      let productName, productColor, productPrice;

      setGotFeaturedProduct(true);

      const productSwitcher = () => {
        if (location.pathname === '/shirts') {
          productName = 'Linen Shirt';
          productColor = 'Navy (discounted)';
          productPrice = 1050;
        }
        if (location.pathname === '/tees') {
          productName = 'Cotton Tees';
          productColor = 'Beige (discounted)';
          productPrice = 750;
        }
        if (location.pathname === '/shorts') {
          productName = 'Jersey Shorts';
          productColor = 'Olive (discounted)';
          productPrice = 1050;
        }
        if (location.pathname === '/shoes') {
          productName = 'Boat Shoes';
          productColor = 'Navy (discounted)';
          productPrice = 1950;
        }
      };

      productSwitcher();

      cartCtx.addItem({
        id: makeID(),
        name: productName,
        amount: 1,
        color: productColor,
        price: productPrice,
        limited: true,
      });
    }
  };

  useEffect(() => {
    // functionality
    const squareAnimate = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setSquareAnimated(true);
      observer.unobserve(entry.target);
    };

    //observer;
    const squareObserver = new IntersectionObserver(squareAnimate, {
      root: null,
      threshold: 0.15,
    });

    squareObserver.observe(squareGhostRef.current);
  }, []);

  return (
    <div className={`${classes.container} ${props.class}`}>
      <div className={classes.textBox}>
        <div className={classes.imgBoxFeatured}>
          <img
            src={props.featuredImage}
            alt="featured item"
            className={classes.featuredImg}
          />
          <HighlightCircle />
          <div className={classes.squareFeatured}></div>
        </div>

        <h2 className={`${classes.text2} heading-2`}>{props.subheading}</h2>
        <h3 className={`${classes.text3} ${classes.stock} heading-3`}>
          {gotFeaturedProduct ? 'Out of stock!' : props.stocks}
        </h3>
        <h3 className={`${classes.text4} heading-3`}>
          <span className={classes.discounted}>{props.price}</span>
          {props.discountedPrice}
        </h3>
        <p className={classes.paragraph}>{props.paragraph}</p>
        <ButtonCTA
          text="Save to cart"
          onAddToCart={addToCartHandler}
          disabled={gotFeaturedProduct}
        />
      </div>

      <div className={classes.imgBox}>
        <img src={props.modelImage} alt="model" className={classes.img} />
        <div
          className={`${classes.squareFill} ${squareFillClass}`}
          ref={squareFillRef}
        ></div>
        <div
          className={`${squareGhostClass} ${classes.squareGhost}`}
          ref={squareGhostRef}
        ></div>
      </div>
    </div>
  );
};

export default FeaturedItem;
