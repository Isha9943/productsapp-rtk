import {createContext, useState, useReducer} from 'react'
import cartReducer  from '../reducers/cartReducer';


const CartContext = createContext();


export {
    CartContext
}

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(item) {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    function removeFromCart(id) {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id}})
    }

    function clearCart() {
        dispatch({type: 'CLEAR_CART'})
    }

    function increment(id){
        dispatch({type: 'INCREMENT', payload: {id}})
    }

    function decrement(id){
        dispatch({type: 'DECREMENT', payload: {id}})
    }

    return (
        <CartContext.Provider value={{...state, addToCart, removeFromCart, clearCart, increment, decrement}}>
            {props.children}
        </CartContext.Provider>
    );
}