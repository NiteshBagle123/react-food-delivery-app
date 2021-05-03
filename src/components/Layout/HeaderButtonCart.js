import { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButtonCart.module.css';

const HeaderButtonCart = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderButtonCart;