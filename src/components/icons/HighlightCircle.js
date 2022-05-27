import classes from './HighlightCircle.module.css';

const HighlightCircle = props => {
  return (
    <button className={`${classes.circle} ${props.class}`}>Newtral</button>
  );
};

export default HighlightCircle;
