import Modal from './Modal';
import HighlightCircle from '../components/icons/HighlightCircle';
import { ButtonClose } from '../components/buttons/ButtonOps';

import { useLocation } from 'react-router-dom';

import shirtImg from '../assets/img/shirts/shirt-coffee.png';
import teesImg from '../assets/img/tees/tees-denim.png';
import shortsImg from '../assets/img/shorts/shorts-beige.png';
import shoesImg from '../assets/img/shoes/shoes-sand.png';

import classes from './PopupProduct.module.css';

const PopupProduct = props => {
  let productName,
    productFabric,
    productParagraph,
    productBullet1,
    productBullet2,
    productBullet3,
    productImg;
  const location = useLocation();

  const findingActiveRoute = () => {
    if (location.pathname === '/shirts') {
      productName = 'Linen Shirt';
      productFabric = '100% Linen';
      productImg = shirtImg;
      productParagraph =
        'Enjoy the cool comfort and glossy sheen of 100% high-quality natural linen. Features the cool comfort that only linen can provide with long fibers adding a supple texture and a luxurious sheen.';
      productBullet1 = 'Made from 100% European premium linen.';
      productBullet2 = 'Updated shoulder design for increased comfort.';
      productBullet3 = 'Length and hem designed to tuck in or out.';
    }

    if (location.pathname === '/tees') {
      productName = 'Cotton Tees';
      productFabric = 'Supima Cotton 100%';
      productImg = teesImg;
      productParagraph =
        "This season's update features a looser fit at the body and sleeves to create a silhouette that drapes beautifully towards the hem";
      productBullet1 =
        'A clean, simple design that will never go out of style.';
      productBullet2 =
        'When worn on its own, this new neck line will make the neck area look sleek.';
      productBullet3 =
        'Made with a special spinning method that gives it a high-quality texture with minimal scuffing.';
    }

    if (location.pathname === '/shorts') {
      productName = 'Jersey Shorts';
      productFabric = 'Cotton 100%';
      productImg = shortsImg;
      productParagraph =
        'New design with a smarter fit. Above-the-knee length keeps you more cool to have your way into any outdoor activity';
      productBullet1 = 'Made from lightweight cotton fabric.';
      productBullet2 = 'Rough casual shorts. ';
      productBullet3 = 'Drawstring waist allows easy size adjustment.';
    }

    if (location.pathname === '/shoes') {
      productName = 'Boat Shoes';
      productFabric = 'Genuine Leather 100%';
      productImg = shoesImg;
      productParagraph =
        'The timeless shoe your closet 100% needs! Effortlessly setting the bar for what a real boat shoe should be.';
      productBullet1 = "Soft and luxurious 'glove leather' upper.";
      productBullet2 =
        'Full lambskin lining with Memory Foam cushioning underfoot.';
      productBullet3 = 'Genuine handsewn moccasin construction.';
    }
  };

  findingActiveRoute();

  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <HighlightCircle class={classes.highlight} />
          <img src={productImg} alt={productName} className={classes.img} />
        </div>

        <div className={classes.content}>
          <h2 className={`${classes.name} heading-2`}>{productName}</h2>
          <h3 className={`${classes.fabric} heading-3`}>{productFabric}</h3>
          <p className={classes.paragraph}>{productParagraph}</p>
          <div className={classes.bulletBox}>
            <ul className={classes.bullets}>
              <li className={classes.bullet}>{productBullet1}</li>
              <li className={classes.bullet}>{productBullet2}</li>
              <li className={classes.bullet}>{productBullet3}</li>
            </ul>
          </div>
        </div>
      </div>

      <ButtonClose onClick={props.onClose} class={classes.button} />
    </Modal>
  );
};

export default PopupProduct;
