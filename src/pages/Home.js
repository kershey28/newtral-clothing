import React from 'react';

import SlideHero from '../components/carousel/SlideHero';

import classes from './Home.module.css';

const Home = (props, ref) => {
  const headerRef = ref;

  //TEST
  console.log('HOME');
  return (
    <>
      <div ref={headerRef} className={classes.container}>
        <SlideHero />
      </div>
    </>
  );
};

export default React.forwardRef(Home);
