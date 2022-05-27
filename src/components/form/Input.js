import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const stepUpHandler = e => {
    e.preventDefault();
    ref.current.stepUp();
  };

  const stepDownHandler = e => {
    e.preventDefault();
    ref.current.stepDown();
  };

  return (
    <div className={classes.input}>
      <label className={classes.label} htmlFor={props.input.id}></label>
      <button className={classes.button} onClick={stepDownHandler}>
        -
      </button>
      <input className={classes.number} ref={ref} {...props.input} />
      <button className={classes.button} onClick={stepUpHandler}>
        +
      </button>
    </div>
  );
});

export default Input;
