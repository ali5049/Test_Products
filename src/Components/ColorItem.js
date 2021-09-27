import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function ColorItem({item, setSelectedColor, selectedColor}) {
  return (
    <TouchableOpacity
      testID="color-button"
      onPress={() => setSelectedColor(item)}
      style={[
        styles.button,
        selectedColor === item ? {backgroundColor: 'green'} : null,
      ]}>
      <Text
        style={selectedColor === item ? {color: 'white'} : {color: 'black'}}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 90,
    width: 90,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: 'white',
  },
});

export default ColorItem;
