import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../components/Form/InputBox';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../redux/features/auth/userAction';
import {useReduxStateHook} from '../../../hook/customeHook';
const Login = ({navigation}) => {
  const loginImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&s';
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('12345678');

  const dispatch = useDispatch();
  // const {loading, error, message} = useSelector(state => state.user);

  const loading = useReduxStateHook(navigation, 'home');
  const handleLogin = () => {
    if (!email || !password) {
      return alert('Please add email or password');
    }
    dispatch(login(email, password));
   
  };

  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     dispatch({type: 'clearError'});
  //   }
  //   if (message) {
  //     alert(message);
  //     dispatch({type: 'clearMessage'});
  //     navigation.navigate('home');
  //   }
  // }, [error, message, dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: loginImage}} style={styles.image} />
        {loading && <Text>loading ....</Text>}
        {/* <Text>Email</Text> */}
        <InputBox
          value={email}
          setValue={setEmail}
          placeholder={'Enter Your Email'}
          autoComplete={'email'}
        />
        <InputBox
          value={password}
          setValue={setPassword}
          placeholder={'Enter Your Password'}
          secureTextEntry={true}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <Text>
            Not a user yet ? Please{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('register')}>
              Register Here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    // alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: '#000000',
    width: '80%',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  loginBtnText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20,
  },
  link: {
    color: 'red',
  },
});
export default Login;
