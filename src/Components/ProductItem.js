import React, {useEffect, useState} from 'react';
import {Text, Image, Animated, View, StyleSheet} from 'react-native';

import {Food} from '../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
function ProductItem({
  item,
  delayedValue,
  decreasePressed,
  increasePressed,
  quantity,
}) {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);
  useEffect(() => {
    console.log('quantity', quantity);
  }, [quantity]);

  return (
    <Animated.View style={[styles.card]}>
      <View style={styles.imageContainer}>
        <Image source={Food} style={styles.image} />
        <Text style={styles.title}>{item?.name}</Text>
        <Text style={styles.price}>Price {item?.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <TouchableOpacity
            disabled={!quantity}
            style={styles.button}
            onPress={() => decreasePressed(item)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity ? quantity : 0}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => increasePressed(item)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.14,
    elevation: 3,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,

    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    width: '50%',
  },
  price: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ProductItem;
