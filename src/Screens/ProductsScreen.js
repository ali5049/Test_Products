import React, {useCallback, useEffect, useState, useReducer} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ColorItem, ProductItem} from '../Components';

const types = {
  PRODUCTS_LOADING: 'SIGNUP_LOADING',
  PRODUCTS: 'PRODUCTS',
  NETWORK_ERROR: 'NETWORK_ERROR',

  INCREASE_CART: 'INCREASE_CART',
  UPDATE_CART_LOADING: 'UPDATE_CART_LOADING',
  DECREASE_CART: 'DECREASE_CART',
};

const foodReducer = (state, action) => {
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

const ProductsScreen = () => {
  const defaultState = {
    products: [],
    cart: [],
    loading: false,
    error: '',
  };

  const colors = ['Black', 'Stone', 'Red'];
  const [selectedColor, setSelectedColor] = useState('Black');
  const [delayedValue, setDelayedValue] = useState(500);
  const [totalPrice, setTotal] = useState(0);
  const [state, dispatch] = useReducer(useCallback(foodReducer), defaultState);


  useEffect(() => {
   
    fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    ).then((res) =>
      res.json().then((jsonResponse) => {
        console.log(jsonResponse);
        dispatch({type: types.PRODUCTS, products: jsonResponse});
      }),
    );
  }, [selectedColor]);

  const increasePressed = (item) => {
    dispatch({type: types.INCREASE_CART, item});

    setTotal(totalPrice + item?.price);
  };
  const decreasePressed = (item) => {
    dispatch({type: types.DECREASE_CART, item: item});
    setTotal(totalPrice - item?.price);
  };
  const renderColor = useCallback(
    ({item}) => (
      <ColorItem
        key={item}
        item={item}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    ),
    [selectedColor],
  );
  const renderProduct = useCallback(
    ({item}) => (
      <ProductItem
        key={item?.id}
        item={item}
        increasePressed={increasePressed}
        decreasePressed={decreasePressed}
        delayedValue={delayedValue}
        quantity={
          state?.cart[state.cart.findIndex((_item) => _item?.id === item?.id)]
            ?.quantity
        }
      />
    ),
    [state.cart],
  );
  const filterByColor = (item)=>{
    return item.colour===selectedColor
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <FlatList
            testID="colors-list"
            showsHorizontalScrollIndicator={false}
            horizontal
            data={colors}
            renderItem={renderColor}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => String(item)}
          />
        </View>
        {state.loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator testID="loader" color="black" />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={state.products.filter(filterByColor)}
            renderItem={renderProduct}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => String(item.id)}
          />
        )}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Total: {parseFloat( totalPrice).toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: 'white',
  },
  listContainer: {
    paddingVertical: 10,
  },
  loaderContainer: {
    marginTop: 20,
  },
  priceContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;
