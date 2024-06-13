

import React from 'react';
import {View} from 'react-native';
import AppNavigator from './src/config/AppNavigator';
// import {ThemeContainer} from './src/config/theme';
import {LogBox} from 'react-native';
// import {Provider} from 'react-redux';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    

        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
     
  );
};

export default App;
