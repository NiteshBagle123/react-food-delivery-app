import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItem = state.items.concat(action.item);
        const newTotalItem = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItem,
            totalAmount: newTotalItem
        };
    }
    return defaultCartState; 
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    };

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;