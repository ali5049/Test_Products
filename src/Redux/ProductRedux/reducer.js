import {types} from './types';
/**
 *
 * @param {*} state this is an initial state
 * @param {*} action action object contsins action type
 */

const defaultState = {
  products: [],
  cart: [],
  loading: false,
  error: '',
};
const foodReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case types.PRODUCTS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case types.NETWORK_ERROR:
      return {
        ...state,
        products: [],
        loading: false,
      };
    case types.INCREASE_CART: {
      let cart = [...state.cart];
      const index = cart?.findIndex((item) => item?.id === action?.item?.id);
      if (index !== -1) {
        cart[index].quantity = cart[index]?.quantity + 1;
      } else {
        cart.push({id: action?.item?.id, quantity: 1});
      }
      return {
        ...state,
        cart: cart,
      };
    }

    case types.DECREASE_CART: {
      let cart = [...state.cart];
      const index = cart?.findIndex((item) => item?.id === action?.item?.id);
      if (index !== -1 && cart[index].quantity > 0) {
        cart[index].quantity = cart[index]?.quantity - 1;
      } else if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
      return {
        ...state,
        cart: cart,
      };
    }

    default:
      return state;
  }
};

export default foodReducer;
