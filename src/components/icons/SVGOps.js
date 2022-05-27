import svg from './../../assets/svg/sprite.svg';

export const SVGPlus = props => {
  return (
    <svg className={`${props.class} icon-primary`}>
      <use href={`${svg}#icon-plus`}></use>
    </svg>
  );
};

export const SVGMinus = props => {
  return (
    <svg className={`${props.class} icon-primary`}>
      <use href={`${svg}#icon-minus`}></use>
    </svg>
  );
};

export const SVGClose = props => {
  return (
    <svg className={`${props.class} icon-primary`}>
      <use href={`${svg}#icon-cross`}></use>
    </svg>
  );
};
