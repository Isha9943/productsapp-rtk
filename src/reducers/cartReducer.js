export default function cartReducer(state, action) {
    switch(action.type) {

        case 'ADD_TO_CART':
            
            if(state.cartItems.find(item => item.id === action.payload.id)) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1, amount: item.amount + action.payload.price} : item),
                    total: state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1, amount: item.amount + action.payload.price} : item).reduce((acc, item) => acc + item.amount, 0),
                    quantity: state.quantity
                }
            }
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.price,
                quantity: state.quantity+1

            }
        
        case 'REMOVE_FROM_CART':
            return {
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                total: state.cartItems.filter(item => item.id !== action.payload.id).reduce((acc, item) => acc + item.amount, 0),
                quantity: state.cartItems.filter(item => item.id !== action.payload.id).reduce((acc, item) => acc + item.quantity, 0)
            }


        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }

        case 'INCREMENT':
            let its = state.cartItems;
            its.forEach(item => {
                if(item.id === action.payload.id) {
                    item.quantity += 1;
                    item.amount += item.price;
                }
            })
            return {
                ...state,
                cartItems: its,
                total: state.cartItems.map(item => item.amount).reduce((acc, item) => acc + item, 0),
                quantity: state.quantity
            }

        case 'DECREMENT':
            if(state.cartItems.find(item => item.id === action.payload.id).quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                    total: state.total - state.cartItems.find(item => item.id === action.payload.id).price,
                    quantity: state.quantity - 1
                }
            }

            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity - 1, amount: item.amount - item.price} : item),
                total: state.total - state.cartItems.find(item => item.id === action.payload.id).price,
                quantity: state.quantity - 1
            }

        default:
            return state;
    }

}