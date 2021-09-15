import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, LogBox, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import RootStack from './src/Navigation';
import store from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default (_) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View style={{flex: 1}}>
          <RootStack />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};
