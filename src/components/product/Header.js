import React from 'react';

import classes from './Header.module.css';

const Header = (props, ref) => {
  const headerRef = ref;

  return (
    <div className={`${classes.container} ${props.class}`} ref={headerRef}>
      <h1 className={`${classes.text} heading-display`}>{props.title}</h1>
      <img
        src={props.showcaseImage}
        alt="showcase"
        className={`${classes.img} showcase-img`}
      />
    </div>
  );
};

export default React.forwardRef(Header);
