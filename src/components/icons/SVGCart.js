import svgCart from './../../assets/svg/sprite.svg';

const SVGCart = props => {
  return (
    <svg className={`${props.class} icon-cart`}>
      <use href={`${svgCart}#icon-shopping-cart`}></use>
    </svg>
  );
};

export default SVGCart;
