import React, {useEffect, useState} from 'react';
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
import MyOrder from '../screens/Account/MyOrder';
import Dashboard from '../screens/Admin/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const appNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const getUserLocalData = async () => {
      let data = await AsyncStorage.getItem('@auth');
      setIsAuth(data);
      // let loginData = JSON.parse(data);
      console.log('login data', data);
    };
    getUserLocalData();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
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
            name="account"
            component={Account}
            // options={{headerShown: false}}
          />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="myorder" component={MyOrder} />
          <Stack.Screen name="adminPanel" component={Dashboard} />
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          /> */}
          {!isAuth && (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default appNavigator;
