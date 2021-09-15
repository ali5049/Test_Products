import React from 'react';
import Home from '../Containers/HomeScreen';
import ProductsScreen from '../Containers/ProductsScreen';
function Navigator(Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{title: 'Products'}}
        name="ProductsScreen"
        component={ProductsScreen}
      />
    </>
  );
}

export default Navigator;
