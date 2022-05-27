import React, { useRef, useState, useEffect } from 'react';

import ButtonGhost from '../buttons/ButtonGhost';

import classes from './Features.module.css';

const Features = (props, ref) => {
  ///////////////////////////////////////
  // Animation
  const squareGhostRef = useRef(null);
  const squareFillRef = useRef(null);

  const [isSquareAnimated, setSquareAnimated] = useState(false);
  const squareGhostClass = isSquareAnimated ? 'moveInRight' : 'hidden';
  const squareFillClass = isSquareAnimated ? 'moveInBottom' : 'hidden';

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

export default React.forwardRef(Features);
