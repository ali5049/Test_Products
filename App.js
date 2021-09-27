import 'react-native-gesture-handler';
import React from 'react';
import {View, LogBox, StatusBar} from 'react-native';

import RootStack from './src/Navigation';

import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default (_) => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={{flex: 1}}>
        <RootStack />
      </View>
    </SafeAreaProvider>
  );
};
