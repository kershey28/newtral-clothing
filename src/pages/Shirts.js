import React from 'react';

import Header from '../components/product/Header';
import Features from '../components/product/Features';
import Products from '../components/product/Products';
import FeaturedItem from '../components/product/FeaturedItem';

import classes from './PageProduct.module.css';

import shirtImage1 from '../assets/img/shirts/shirt-coffee.png';
import shirtImage2 from '../assets/img/shirts/shirt-marl.png';
import shirtImage3 from '../assets/img/shirts/shirt-rose.png';
import shirtImage4 from '../assets/img/shirts/shirt-navy.png';
import shirtImage5 from '../assets/img/shirts/shirt-white.png';
import shirtImage6 from '../assets/img/shirts/shirt-greige.png';
import shirtImage7 from '../assets/img/shirts/shirt-stone.png';
import shirtImage8 from '../assets/img/shirts/shirt-leaf.png';

import featuresModelImage from '../assets/img/models/model-shirts-1.png';
import featuredModelImage from '../assets/img/models/model-shirts-2.png';
import featuredImage from '../assets/img/shirts/shirt-navy.png';
import showcaseImage from '../assets/img/showcase/showcase-shirts.png';

const Shirts = (props, ref) => {
  const DATA = [
    {
      id: 'shirts1',
      color: 'Coffee',
      rate: 5,
      image: shirtImage1,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts2',
      color: 'Marl',
      rate: 4,
      image: shirtImage2,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts3',
      color: 'Rose',
      rate: 4,
      image: shirtImage3,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts4',
      color: 'Navy',
      rate: 5,
      image: shirtImage4,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts5',
      color: 'White',
      rate: 3,
      image: shirtImage5,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts6',
      color: 'Greige',
      rate: 3,
      image: shirtImage6,
      price: 1450,
      name: 'Linen Shirt',
      disabled: true,
    },
    {
      id: 'shirts7',
      color: 'Stone',
      rate: 5,
      image: shirtImage7,
      price: 1450,
      name: 'Linen Shirt',
    },
    {
      id: 'shirts8',
      color: 'Leaf',
      rate: 2,
      image: shirtImage8,
      price: 1450,
      name: 'Linen Shirt',
      disabled: true,
    },
  ];

  const headerRef = ref;
  const headerTitle = 'Shirts';

  const featuresHeading = 'Refine your image while refreshed';
  const featuresSubheading = 'Linen Shirt';
  const featuresFit = 'Slim Fit';
  const featuresPrice = ' \u20B11450';
  const featuresParagraph =
    "Whether you're looking for cutting-edge contemporary pieces or newly updated classics, you've gone to where the freshest additions to our men's lineup arrive.";

  const FeaturedItemSubheading = 'Best Seller';
  const FeaturedItemStocks = '5 items left!';
  const FeaturedItemPrice = ' \u20B11450';
  const FeaturedItemDiscountedPrice = ' \u20B11050';
  const FeaturedItemParagraph =
    "Exceptionally lightweight and breathable, the Linen fabric ensures that you'll stay in style while being comfortable. ";

  //TEST
  console.log('SHIRTS');

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

export default React.forwardRef(Shirts);
