import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/HomeScreen';
import ProductsScreen from '../Screens/ProductsScreen';
export const SignedOutStack = createStackNavigator();

function HomeStack(Stack) {
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
const SignedOutContainer = memo(() => {
  return (
    <SignedOutStack.Navigator headerMode="float">
      {HomeStack(SignedOutStack)}
    </SignedOutStack.Navigator>
  );
});

const RootStack = function App() {
  const _renderNavigationContent = () => {
    return <SignedOutContainer />;
  };
  console.log('navigator', _renderNavigationContent);
  return (
    <NavigationContainer>{_renderNavigationContent()}</NavigationContainer>
  );
};

export default RootStack;
