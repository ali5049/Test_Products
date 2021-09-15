import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {styles} from './ProductsScreen.style';
import {ColorItem, ProductItem} from '../../Components';
import {connect} from 'react-redux';
import {
  getProductsAction,
  updateCartAction,
} from '../../Redux/ProductRedux/actions';
const ProductsScreen = ({getProducts, products, updateCart}) => {
  const colors = ['Black', 'White', 'Red'];
  const [selectedColor, setSelectedColor] = useState('Black');
  const [delayedValue, setDelayedValue] = useState(500);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts(selectedColor);
  }, [selectedColor, getProducts]);

  const increasePressed = (item) => {
    const data = {id: item.id};
    const type = 'increase';
    updateCart(data, type);
    setTotal(total + item?.price);
  };
  const decreasePressed = (item) => {
    const data = {id: item.id};
    const type = 'decrease';
    updateCart(data, type);
    setTotal(total - item?.price);
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
    [],
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
          products?.cart[
            products?.cart.findIndex((_item) => _item?.id === item?.id)
          ]?.quantity
        }
      />
    ),
    [],
  );
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
        {products.loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator testID="loader" color="black" />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products.products}
            renderItem={renderProduct}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => String(item.id)}
          />
        )}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Total: {total}</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (color) => dispatch(getProductsAction(color)),
    updateCart: (item, type) => dispatch(updateCartAction(item, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
