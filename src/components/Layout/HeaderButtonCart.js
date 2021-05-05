import { Fragment, useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButtonCart.module.css';
import CartContext from '../../store/cart-context';

const HeaderButtonCart = (props) => {
    const cartCtx = useContext(CartContext);
    console.log('data test items', cartCtx.items);
    const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderButtonCart;