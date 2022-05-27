import classes from './Products.module.css';

import Product from './Product';

const Products = props => {
  const productsList = props.products.map(product => (
    <Product
      id={product.id}
      key={product.id}
      color={product.color}
      rate={product.rate}
      image={product.image}
      price={product.price}
      name={product.name}
      disabled={product.disabled}
    />
  ));

  return (
    <div className={`${classes.container} ${props.class}`}>
      <ul className={classes.content}>{productsList}</ul>
    </div>
  );
};

export default Products;
