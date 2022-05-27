import classes from './Logo.module.css';

const Logo = props => {
  return (
    <div className={`${classes.container} ${props.class}`}>
      <p className={classes.heading}>
        <span className={classes.span}>{props.text1}</span>
        {props.text2}
      </p>
    </div>
  );
};

export default Logo;
