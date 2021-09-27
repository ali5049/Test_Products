import React from 'react';
import {TouchableOpacity, Text,StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 50,
    width: '80%',
    borderRadius: 25,
  },
  title: {
    fontSize: 17,
    color: 'white',
  },
});


export default FullButton;
