import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartItems: [], 
    total: 0, 
    quantity: 0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.total += action.payload.price;
            state.quantity += 1;
        },
        increment: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.total += item.price;
                state.quantity += 1;
            }
        }, 
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

// for root reducer to combine and give it to store
export const cartReducer = cartSlice.reducer;
export const {addToCart, increment, clearCart} = cartSlice.actions;