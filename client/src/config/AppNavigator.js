import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import ProductDetail from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Payment from '../screens/Payment';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Account from '../screens/Account/Account';
import Notification from '../screens/Account/Notification';
import Profile from '../screens/Account/Profile';
const appNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mobile"
          component={About}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />

        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="account"
          component={Account}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default appNavigator;
