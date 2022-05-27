import ButtonCTA from './../buttons/ButtonCTA';
import HighlightCircle from '../icons/HighlightCircle';
import { scrollIntoPosition } from '../../helpers/helpers';

import classes from './SlideHero.module.css';

import React from 'react';
import { useRef, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import showcaseImage1Reg from './../../assets/img/hero/hero-shirts.jpg';
import showcaseImage2Reg from './../../assets/img/hero/hero-shoes.jpg';
import showcaseImage3Reg from './../../assets/img/hero/hero-shorts.jpg';
import showcaseImage4Reg from './../../assets/img/hero/hero-tees.jpg';
import showcaseImage5Reg from './../../assets/img/hero/hero-jackets.jpg';
import showcaseImage1Small from './../../assets/img/hero/hero-shirts-small.jpg';
import showcaseImage2Small from './../../assets/img/hero/hero-shoes-small.jpg';
import showcaseImage3Small from './../../assets/img/hero/hero-shorts-small.jpg';
import showcaseImage4Small from './../../assets/img/hero/hero-tees-small.jpg';
import showcaseImage5Small from './../../assets/img/hero/hero-jackets-small.jpg';

// Switcher
const phoneMediaQuery = window.matchMedia('(max-width: 600px)');
const showcaseImage1 = phoneMediaQuery.matches
  ? showcaseImage1Small
  : showcaseImage1Reg;
const showcaseImage2 = phoneMediaQuery.matches
  ? showcaseImage2Small
  : showcaseImage2Reg;
const showcaseImage3 = phoneMediaQuery.matches
  ? showcaseImage3Small
  : showcaseImage3Reg;
const showcaseImage4 = phoneMediaQuery.matches
  ? showcaseImage4Small
  : showcaseImage4Reg;
const showcaseImage5 = phoneMediaQuery.matches
  ? showcaseImage5Small
  : showcaseImage5Reg;

// DATA
const slides = [
  {
    title: 'New',
    subtitle: 'Arrival',
    description: 'Denim & Roses season',
    product: 'Linen Shirts',
    image: showcaseImage1,
    link: '/shirts',
  },
  {
    title: 'Limited',
    subtitle: 'Edition',
    description: 'Form follows your steps',
    product: 'Boat Shoes',
    image: showcaseImage2,
    link: '/shoes',
  },
  {
    title: 'Best',
    subtitle: 'Sellers',
    description: 'Move with ease while in style',
    product: 'Jersey Shorts',
    image: showcaseImage3,
    link: '/shorts',
  },
  {
    title: "Men's",
    subtitle: 'Essentials',
    description: 'Your daily vibes',
    product: 'Cotton Tees',
    image: showcaseImage4,
    link: '/tees',
  },
  {
    title: 'Coming',
    subtitle: 'Soon',
    description: 'The return of the classics',
    product: 'Denim Jackets',
    image: showcaseImage5,
    link: '/',
  },
];

// Functions
const useTilt = active => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = e => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
};

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

// Main Slide
const Slide = props => {
  const active = props.offset === 0 ? true : null;
  const ref = useTilt(active);
  const navigate = useNavigate();

  const navigateHandler = () => {
    const link = props.slide.link;
    navigate(link);
    scrollIntoPosition('top');
  };

  return (
    <div
      ref={ref}
      className={classes.slide}
      data-active={active}
      style={{
        '--offset': props.offset,
        '--dir': props.offset === 0 ? 0 : props.offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={classes.slideBackground}
        style={{
          backgroundImage: `url('${props.slide.image}')`,
        }}
      />
      <div
        className={classes.slideContent}
        style={{
          backgroundImage: `url('${props.slide.image}')`,
        }}
      >
        <div className={classes.slideContentInner}>
          <h2 className={classes.slideTitle}>{props.slide.title}</h2>
          <h3 className={classes.slideSubtitle}>{props.slide.subtitle}</h3>
          <p className={classes.slideDescription}>{props.slide.description}</p>
          <HighlightCircle />

          <ButtonCTA
            text={props.slide.product}
            class={classes.buttonCTA}
            onClick={navigateHandler}
            onTouch={navigateHandler}
          />
        </div>
      </div>
    </div>
  );
};

// Slide Container
const SlideHero = props => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  const timer = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => dispatch({ type: 'NEXT' }), 5000 + i * 5000);
    }
  };

  const wheelHandler = e => {
    if (e.nativeEvent.wheelDelta > 0) dispatch({ type: 'NEXT' });

    if (e.nativeEvent.wheelDelta < 0) dispatch({ type: 'PREV' });
  };

  const touchHandler = () => {
    dispatch({ type: 'NEXT' });
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <div
      className={classes.container}
      onTouchEnd={touchHandler}
      onWheel={wheelHandler}
    >
      <div className={classes.subcontainer}>
        <div className={classes.slides}>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);

            return <Slide slide={slide} offset={offset} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideHero;
