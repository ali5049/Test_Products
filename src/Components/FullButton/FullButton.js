import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './FullButton.style';
function FullButton({onPress, title}) {
  return (
    <TouchableOpacity
      rejectResponderTermination
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default FullButton;
