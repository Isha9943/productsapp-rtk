import {configureStore} from '@reduxjs/toolkit'
import {cartReducer} from './features/cartSlice'
import profileSlice from './features/profileSlice'

// configureStore takes root-reducer
const store = configureStore({
    //rootReducer
    reducer: {
        cart: cartReducer,
        profile: profileSlice.reducer
        
    }
});

export default store;