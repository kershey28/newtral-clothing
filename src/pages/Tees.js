import React from 'react';

import Header from '../components/product/Header';
import Features from '../components/product/Features';
import Products from '../components/product/Products';
import FeaturedItem from '../components/product/FeaturedItem';

import classes from './PageProduct.module.css';

import teesImage1 from '../assets/img/tees/tees-denim.png';
import teesImage2 from '../assets/img/tees/tees-stone.png';
import teesImage3 from '../assets/img/tees/tees-olive.png';
import teesImage4 from '../assets/img/tees/tees-rose.png';
import teesImage5 from '../assets/img/tees/tees-white.png';
import teesImage6 from '../assets/img/tees/tees-beige.png';
import teesImage7 from '../assets/img/tees/tees-black.png';
import teesImage8 from '../assets/img/tees/tees-caramel.png';

import featuresModelImage from '../assets/img/models/model-tees-1.png';
import featuredModelImage from '../assets/img/models/model-tees-2.png';
import featuredImage from '../assets/img/tees/tees-beige.png';
import showcaseImage from '../assets/img/showcase/showcase-tees.png';

const Tees = (props, ref) => {
  const DATA = [
    {
      id: 'tees1',
      color: 'Denim',
      rate: 5,
      image: teesImage1,
      price: 950,
      name: 'Cotton tees',
    },
    {
      id: 'tees2',
      color: 'Stone',
      rate: 4,
      image: teesImage2,
      price: 950,
      name: 'Cotton Tees',
    },
    {
      id: 'tees3',
      color: 'Olive',
      rate: 4,
      image: teesImage3,
      price: 950,
      name: 'Cotton Tees',
      disabled: true,
    },
    {
      id: 'tees4',
      color: 'Rose',
      rate: 4,
      image: teesImage4,
      price: 950,
      name: 'Cotton Tees',
    },
    {
      id: 'tees5',
      color: 'White',
      rate: 3,
      image: teesImage5,
      price: 950,
      name: 'Cotton Tees',
      disabled: true,
    },
    {
      id: 'tees6',
      color: 'Beige',
      rate: 5,
      image: teesImage6,
      price: 950,
      name: 'Cotton Tees',
    },
    {
      id: 'tees7',
      color: 'Black',
      rate: 3,
      image: teesImage7,
      price: 950,
      name: 'Cotton Tees',
    },
    {
      id: 'tees8',
      color: 'Caramel',
      rate: 4,
      image: teesImage8,
      price: 950,
      name: 'Cotton Tees',
    },
  ];

  const headerRef = ref;
  const headerTitle = 'Tees';

  const featuresHeading = 'Tees that supports your daily hustle';
  const featuresSubheading = 'Cotton Tees';
  const featuresFit = 'Tailored Fit';
  const featuresPrice = ' \u20B1950';
  const featuresParagraph =
    "Tees are perhaps the simplest yet most versatile item in a man's wardrobe. That's why we opt for high performing tops for keeping your cool while in style.";

  const FeaturedItemSubheading = 'Best Seller';
  const FeaturedItemStocks = '9 items left!';
  const FeaturedItemPrice = ' \u20B1950';
  const FeaturedItemDiscountedPrice = ' \u20B1750';
  const FeaturedItemParagraph =
    'Supima fabric takes basic clothes to a whole new premium level. Its quality and durability show you how everyday wear should be.';

  //TEST
  console.log('TEES');
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
        price={featuresPrice}
        fit={featuresFit}
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

export default React.forwardRef(Tees);
