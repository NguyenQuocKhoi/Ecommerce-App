import React from 'react';
import {View} from 'react-native';
import AppNavigator from './src/config/AppNavigator';
// import {ThemeContainer} from './src/config/theme';
import {LogBox} from 'react-native';
// import {Provider} from 'react-redux';
import {Provider} from 'react-redux';
import store from './redux/store';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
