import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';

import {FullButton} from '../Components';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FullButton
        title="Products"
        onPress={() => navigation.navigate('ProductsScreen')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Home;
