import Navigation from './Navigation';
import Cart from '../components/cart/Cart';

import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Essentials = props => {
  ///////////////////////////////////////
  // Sticky Navigation
  const headerRef = props.headerRef;
  const navRef = useRef(null);

  const [isNavAppeared, setNavAppeared] = useState(true);
  const classRef = isNavAppeared ? 'navSticky' : 'navAbsolute';
  const location = useLocation();

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;

    // functionality
    const stickyNav = entries => {
      const [entry] = entries;

      if (location.pathname === '/') return;

      if (!entry.isIntersecting) {
        setNavAppeared(true);
      } else setNavAppeared(false);
    };

    //observer;
    const navigationObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navigationObserver.observe(headerRef.current);
  }, [classRef, location, headerRef]);

  ///////////////////////////////////////
  // Cart
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  ///////////////////////////////////////
  // Arguments
  const link1 = 'Home';
  const link2 = 'Shirts';
  const link3 = 'Tees';
  const link4 = 'Shorts';
  const link5 = 'Shoes';

  return (
    <>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onCloseFeature={props.onClose} />
      )}

      <Navigation
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        link5={link5}
        ref={navRef}
        class={classRef}
        onShowCart={showCartHandler}
      />
    </>
  );
};

export default Essentials;
