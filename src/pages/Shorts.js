import React from 'react';

import Header from '../components/product/Header';
import Features from '../components/product/Features';
import Products from '../components/product/Products';
import FeaturedItem from '../components/product/FeaturedItem';

import classes from './PageProduct.module.css';

import shortsImage1 from '../assets/img/shorts/shorts-beige.png';
import shortsImage2 from '../assets/img/shorts/shorts-olive.png';
import shortsImage3 from '../assets/img/shorts/shorts-rose.png';
import shortsImage4 from '../assets/img/shorts/shorts-mint.png';
import shortsImage5 from '../assets/img/shorts/shorts-navy.png';
import shortsImage6 from '../assets/img/shorts/shorts-stone.png';
import shortsImage7 from '../assets/img/shorts/shorts-black.png';
import shortsImage8 from '../assets/img/shorts/shorts-teal.png';

import featuresModelImage from '../assets/img/models/model-shorts-1.png';
import featuredModelImage from '../assets/img/models/model-shorts-2.png';
import featuredImage from '../assets/img/shorts/shorts-olive.png';
import showcaseImage from '../assets/img/showcase/showcase-shorts.png';

const Shorts = (props, ref) => {
  const DATA = [
    {
      id: 'shorts1',
      color: 'Beige',
      rate: 5,
      image: shortsImage1,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts2',
      color: 'Olive',
      rate: 5,
      image: shortsImage2,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts3',
      color: 'Rose',
      rate: 4,
      image: shortsImage3,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts4',
      color: 'Mint',
      rate: 4,
      image: shortsImage4,
      price: 1250,
      name: 'Jersey Shorts',
      disabled: true,
    },
    {
      id: 'shorts5',
      color: 'Navy',
      rate: 3,
      image: shortsImage5,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts6',
      color: 'Stone',
      rate: 4,
      image: shortsImage6,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts7',
      color: 'Black',
      rate: 3,
      image: shortsImage7,
      price: 1250,
      name: 'Jersey Shorts',
    },
    {
      id: 'shorts8',
      color: 'Teal',
      rate: 4,
      image: shortsImage8,
      price: 1250,
      name: 'Jersey Shorts',
    },
  ];

  const headerRef = ref;
  const headerTitle = 'Shorts';

  const featuresHeading = 'Unlock the moves within your style';
  const featuresSubheading = 'Jersey Shorts';
  const featuresFit = 'Regular Fit';
  const featuresPrice = ' \u20B11250';
  const featuresParagraph =
    'Get moving in style with our active shorts for men boasting durability and flexibility --- ideal for keeping cool in the sun.';

  const FeaturedItemSubheading = 'Best Seller';
  const FeaturedItemStocks = '7 items left!';
  const FeaturedItemPrice = ' \u20B11250';
  const FeaturedItemDiscountedPrice = ' \u20B11050';
  const FeaturedItemParagraph =
    "Jersey fabric is one of our most durable shorts in men's apparel. It can last up to 5 years. Sustainability and durability rolled into one pair of shorts. You don't have to worry about moving through your everyday activities.";

  //TEST
  console.log('SHORTS');
  return (
    <section className={classes.container}>
      <Header
        class={classes.heading}
        title={headerTitle}
        showcaseImage={showcaseImage}
        ref={headerRef}
      />

      <Features
        class={classes.features}
        heading={featuresHeading}
        subheading={featuresSubheading}
        fit={featuresFit}
        price={featuresPrice}
        paragraph={featuresParagraph}
        modelImage={featuresModelImage}
        onShowModal={props.onShowModal}
      />

      <Products class={classes.products} products={DATA} />

      <FeaturedItem
        class={classes.featuredItem}
        subheading={FeaturedItemSubheading}
        stocks={FeaturedItemStocks}
        price={FeaturedItemPrice}
        discountedPrice={FeaturedItemDiscountedPrice}
        paragraph={FeaturedItemParagraph}
        modelImage={featuredModelImage}
        featuredImage={featuredImage}
      />
    </section>
  );
};

export default React.forwardRef(Shorts);
