import React from 'react';

import Header from '../components/product/Header';
import Features from '../components/product/Features';
import Products from '../components/product/Products';
import FeaturedItem from '../components/product/FeaturedItem';

import classes from './PageProduct.module.css';

import shoesImage1 from '../assets/img/shoes/shoes-sand.png';
import shoesImage2 from '../assets/img/shoes/shoes-cream.png';
import shoesImage3 from '../assets/img/shoes/shoes-amaretto.png';
import shoesImage4 from '../assets/img/shoes/shoes-oatmeal.png';
import shoesImage5 from '../assets/img/shoes/shoes-navy.png';
import shoesImage6 from '../assets/img/shoes/shoes-olive.png';
import shoesImage7 from '../assets/img/shoes/shoes-stone.png';
import shoesImage8 from '../assets/img/shoes/shoes-black.png';

import featuresModelImage from '../assets/img/models/model-shoes-1.png';
import featuredModelImage from '../assets/img/models/model-shoes-2.png';
import featuredImage from '../assets/img/shoes/shoes-navy.png';
import showcaseImage from '../assets/img/showcase/showcase-shoes.png';

const Shoes = (props, ref) => {
  const DATA = [
    {
      id: 'shoes1',
      color: 'Sand',
      rate: 5,
      image: shoesImage1,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes2',
      color: 'Cream',
      rate: 4,
      image: shoesImage2,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes3',
      color: 'Amaretto',
      rate: 3,
      image: shoesImage3,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes4',
      color: 'Oatmeal',
      rate: 4,
      image: shoesImage4,
      price: 2450,
      name: 'Boat Shoes',
      disabled: true,
    },
    {
      id: 'shoes5',
      color: 'Navy',
      rate: 5,
      image: shoesImage5,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes6',
      color: 'Olive',
      rate: 3,
      image: shoesImage6,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes7',
      color: 'Stone',
      rate: 4,
      image: shoesImage7,
      price: 2450,
      name: 'Boat Shoes',
    },
    {
      id: 'shoes8',
      color: 'Black',
      rate: 3,
      image: shoesImage8,
      price: 2450,
      name: 'Boat Shoes',
    },
  ];

  const headerRef = ref;
  const headerTitle = 'Shoes';

  const featuresHeading = 'Shoes that give you extra-mile definition';
  const featuresSubheading = 'Boat Shoes';
  const featuresFit = 'Flexible Fit';
  const featuresPrice = ' \u20B12450';
  const featuresParagraph =
    'The secret of a great outfit lies in the details; carefully chosen shoes which convey personality without sacrificing function.';

  const FeaturedItemSubheading = 'Best Seller';
  const FeaturedItemStocks = '3 items left!';
  const FeaturedItemPrice = ' \u20B12450';
  const FeaturedItemDiscountedPrice = ' \u20B11950';
  const FeaturedItemParagraph =
    'Every pair is made of top quality materials and is handcrafted by our Filipino craftsmen with world-class shoemaking skills. Dapper look, real quick! Made with authentic leather to take the essential steps with you.';

  //TEST
  console.log('SHOES');
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

export default React.forwardRef(Shoes);
