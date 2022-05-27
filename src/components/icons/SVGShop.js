import svgShop from './../../assets/svg/sprite.svg';

const SVGShop = props => {
  return (
    <svg className={`${props.class} icon-accent`}>
      <use href={`${svgShop}#icon-shopping-bag`}></use>
    </svg>
  );
};

export default SVGShop;
