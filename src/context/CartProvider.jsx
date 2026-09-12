import {createContext, useState, useReducer, useContext} from 'react'
import { ProductContext } from './ProductProvider';
import cartReducer  from '../reducers/cartReducer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);
    let {products} = useContext(ProductContext);
    // function addToCart(item) {
    //     dispatch({type: 'ADD_TO_CART', payload: item})
    // }

    function addToCart(id){
        let item = products.find(product => product.id === id);
        item.quantity = 1;
        item.amount = item.price;
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    function removeFromCart(id) {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id}})
    }

    function clearCart() {
        let user = window.sessionStorage.getItem('user');
        let order  ={
            "customer": user,
            "orderDate": new Date(),
            "items": state.cartItems,
            "total": state.total
        }
        axios.post('http://localhost:1234/orders', order)
        .then(res => {
            dispatch({type: 'CLEAR_CART'})
            navigate("/")
        });
        
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