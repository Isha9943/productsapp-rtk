export default function cartReducer(state, action) {
    switch(action.type) {

        case 'ADD_TO_CART':

            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.price,
                quantity: state.quantity + 1

            }
        
        case 'REMOVE_FROM_CART':
            return {
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price,
                quantity: state.quantity - 1
            }


        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }

        

        default:
            return state;
    }

}