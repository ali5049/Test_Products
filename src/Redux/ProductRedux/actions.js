import {types} from './types';

export const getProductsActionCreator = (products) => {
  return {
    type: types.PRODUCTS,
    products,
  };
};

export const getProductsAction = (color) => async (dispatch) => {
  try {
    dispatch({type: types.PRODUCTS_LOADING, loading: true});
    //Api call
    let products = [];
    if (color === 'Black') {
      products = [
        {id: 1, price: 32, color: `${color} 2`},
        {id: 2, price: 43, color: `${color} 4`},
        {id: 3, price: 34, color: `${color} 6`},
        {id: 4, price: 543, color: `${color} 8`},
        {id: 5, price: 43, color: `${color} 10`},
        {id: 6, price: 23, color: `${color} 12`},
        {id: 7, price: 231, color: `${color} 14`},
        {id: 8, price: 44, color: `${color} 16`},
        {id: 9, price: 543, color: `${color} 18`},
        {id: 10, price: 745, color: `${color} 18`},
      ];
    }
    if (color === 'White') {
      products = [
        {id: 11, price: 32, color: `${color} 2`},
        {id: 12, price: 43, color: `${color} 4`},
        {id: 13, price: 34, color: `${color} 6`},
        {id: 14, price: 543, color: `${color} 8`},
        {id: 15, price: 43, color: `${color} 10`},
        {id: 16, price: 23, color: `${color} 12`},
        {id: 17, price: 231, color: `${color} 14`},
        {id: 18, price: 44, color: `${color} 16`},
        {id: 19, price: 543, color: `${color} 18`},
        {id: 20, price: 745, color: `${color} 18`},
      ];
    }
    if (color === 'Red') {
      products = [
        {id: 21, price: 32, color: `${color} 2`},
        {id: 22, price: 43, color: `${color} 4`},
        {id: 23, price: 34, color: `${color} 6`},
        {id: 24, price: 543, color: `${color} 8`},
        {id: 25, price: 43, color: `${color} 10`},
        {id: 26, price: 23, color: `${color} 12`},
        {id: 27, price: 231, color: `${color} 14`},
        {id: 28, price: 44, color: `${color} 16`},
        {id: 29, price: 543, color: `${color} 18`},
        {id: 30, price: 745, color: `${color} 18`},
      ];
    }

    const delay = await new Promise((resolve) =>
      setTimeout(() => resolve(), 1000),
    );
    dispatch({type: types.PRODUCTS_LOADING, loading: false});
    dispatch(getProductsActionCreator(products));
  } catch (error) {
    dispatch({type: types.PRODUCTS_LOADING, loading: false});

    if (error.message === 'Network Error') {
      dispatch({
        type: types.NETWORK_ERROR,
        error: error.message,
      });
    } else {
      dispatch({
        type: types.NETWORK_ERROR,
        error: 'Unknown Error',
      });
    }
  }
};

export const updateCartIncreaseActionCreator = (item) => {
  return {
    type: types.INCREASE_CART,
    item,
  };
};

export const updateCartDecreaseActionCreator = (item) => {
  return {
    type: types.DECREASE_CART,
    item,
  };
};

export const updateCartAction = (item, type) => async (dispatch) => {
  try {
    dispatch({type: types.UPDATE_CART_LOADING, loading: true});
    dispatch({type: types.UPDATE_CART_LOADING, loading: false});
    if (type === 'increase') {
      dispatch(updateCartIncreaseActionCreator(item));
    } else {
      dispatch(updateCartDecreaseActionCreator(item));
    }
  } catch (error) {
    dispatch({type: types.UPDATE_CART_LOADING, loading: false});
    if (error.message === 'Network Error') {
      dispatch({
        type: types.NETWORK_ERROR,
        error: error.message,
      });
    } else {
      dispatch({
        type: types.NETWORK_ERROR,
        error: 'Unknown Error',
      });
    }
  }
};
