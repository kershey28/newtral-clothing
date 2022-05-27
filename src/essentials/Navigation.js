import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import CartDisplay from './CartDisplay';

import { scrollIntoPosition } from '../helpers/helpers';
import classes from './Navigation.module.css';

const Navigation = (props, ref) => {
  const logoText1 = 'New';
  const logoText2 = 'tral';

  const navRef = ref;

  const navLinkHandler = () => {
    scrollIntoPosition('top');
  };

  return (
    <div
      className={`${props.class} ${classes.navigation} ${classes.burger} `}
      ref={navRef}
    >
      <input
        type="checkbox"
        className={classes.burger__checkbox}
        id="navi-toggle"
      />
      <label
        className={`${classes.navigation__tab} ${classes.burger__button} ${props.class}`}
        htmlFor="navi-toggle"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className={classes.burger__svg}
        >
          <path
            className={`${classes.burger__line} ${classes.burger__line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line2}`}
            d="M 20,50 H 80"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>

        {/* TEST */}
        <Logo
          text1={logoText1}
          text2={logoText2}
          class={classes.burger__logoOutside}
        />

        <CartDisplay
          class={classes.burger__svgCart}
          onClick={props.onShowCart}
        />

        <nav
          className={`${classes.navigation__content} ${classes.burger__content}`}
        >
          <div
            className={`${classes['navigation__logo-box']} ${classes['burger__logo-box']} ${classes.logo}`}
          >
            <Logo text1={logoText1} text2={logoText2} />
          </div>

          <ul className={`${classes.navigation__list} ${classes.burger__list}`}>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/"
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {props.link1}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/shirts"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {props.link2}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/tees"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {props.link3}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/shorts"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {props.link4}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/shoes"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {props.link5}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.navigation__cart} ${classes.burger__item}`}
            >
              <CartDisplay
                onClick={props.onShowCart}
                class={classes.navigation__svgCart}
              />
            </li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default React.forwardRef(Navigation);
