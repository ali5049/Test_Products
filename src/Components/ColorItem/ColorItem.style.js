import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
