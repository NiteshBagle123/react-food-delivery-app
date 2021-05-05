import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    console.log('cartCtx test', cartCtx);
    console.log('props', props);
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount,
            price: props.price
        });
    };
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
                <form>
                    <MealItemForm onAddToCart={addToCartHandler}/>
                </form>
            </div>
        </li>
    );
};

export default MealItem;
