import * as actionTypes from '../constants/cartConstants';

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
            // On the Internet, a payload is either: The essential data that is being carried within a packet or other transmission unit.
            const item = action.payload;
            //check if the item that action loads is in the cart
            //return the item (x) which is the first one satify the condition (x.product === item.product)
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    // ...=>rest parameter, coule deconstruct array.
                    ...state,
                    // set it to a new cart items, going throught the old array, map throught each item in the array
                    // if x.product === existItem.product set to the new item in the action.payload, else set it equal to the current item which is mapping throught
                    // 如果該商品已存在在購物車，將其取代
                    cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
            ...state,
            cartItems: [...state.cartItems, item],// add the new item in the array
            };

            } // its the first time it is added to the cart
        
            case actionTypes.REMOVE_FROM_CART:
                return {
                  ...state,
                // add everything in the new array, where it's product id is not equal to action.payload
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
    default:
        return state;
    }
};