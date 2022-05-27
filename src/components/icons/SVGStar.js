import svgStar from './../../assets/svg/sprite.svg';

const SVGStar = () => {
  return (
    <svg className="star-accent">
      <use href={`${svgStar}#icon-star`}></use>
    </svg>
  );
};

export default SVGStar;
