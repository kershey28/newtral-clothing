import ButtonGhost from '../buttons/ButtonGhost';
import { useElementOnScreenOnce } from '../../helpers/hooks';

import classes from './Features.module.css';

const Features = props => {
  // observer
  const [elementRef, isElementAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  const squareGhostClass = isElementAppeared ? 'moveInRight' : 'hidden';
  const squareFillClass = isElementAppeared ? 'moveInBottom' : 'hidden';

  return (
    <div className={`${classes.container} ${props.class}`}>
      <div className={classes.imgBox} ref={elementRef}>
        <img src={props.modelImage} alt="model" className={classes.img} />
        <div className={`${classes.squareFill} ${squareFillClass}`}></div>
        <div className={`${squareGhostClass} ${classes.squareGhost}`}></div>
      </div>

      <div className={classes.textBox}>
        <h1 className={`${classes.text1} heading-1`}>{props.heading}</h1>
        <h2 className={`${classes.text2} heading-2`}>{props.subheading}</h2>
        <h3 className={`${classes.text3} heading-3`}>{props.fit}</h3>
        <h3 className={`${classes.text4} heading-3`}>{props.price}</h3>
        <p className={classes.paragraph}>{props.paragraph}</p>
        <ButtonGhost text="Take a look" onShowModal={props.onShowModal} />
      </div>
    </div>
  );
};

export default Features;
