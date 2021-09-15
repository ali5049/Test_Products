import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './ColorItem.style';
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

export default ColorItem;
