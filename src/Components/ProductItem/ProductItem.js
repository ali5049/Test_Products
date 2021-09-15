import React, {useEffect, useState} from 'react';
import {Text, Image, Animated, View} from 'react-native';
import {styles} from './ProductItem.style';
import {Food} from '../../assets';
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

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [delayedValue, 1],
  });
  return (
    <Animated.View style={[styles.card, {transform: [{translateX}]}]}>
      <Image source={Food} style={styles.image} />
      <View>
        <Text style={styles.title}>{item?.color}</Text>
        <Text style={styles.price}>Price {item?.price}</Text>
      </View>
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
    </Animated.View>
  );
}

export default ProductItem;
