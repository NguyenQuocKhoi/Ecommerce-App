import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/Form/InputBox';
import {useDispatch} from 'react-redux';
import {register} from '../../../redux/features/auth/userAction';
import {useReduxStateHook} from '../../../hook/customeHook';

const Register = ({navigation}) => {
  const loginImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&s';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [answer, setAnswer] = useState('');
  const [country, setCountry] = useState('VN');

  const dispatch = useDispatch();
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !phone) {
      return alert('Please provide all field');
    }
    const formData = {
      email,
      password,
      name,
      address,
      city,
      phone,
      answer,
      country: 'vn',
    };
    dispatch(register(formData));

    // alert('Register Successfully');
    // navigation.navigate('login');
  };
  const loading = useReduxStateHook(navigation, 'login');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: loginImage}} style={styles.image} />
        {/* <Text>Email</Text> */}
        <InputBox
          value={name}
          setValue={setName}
          placeholder={'Enter Your Name'}
          autoComplete={'name'}
        />
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

        <InputBox
          value={address}
          setValue={setAddress}
          placeholder={'Enter Your Address'}
          autoComplete={'address-line1'}
        />

        <InputBox
          value={city}
          setValue={setCity}
          placeholder={'Enter Your City'}
          autoComplete={'country'}
        />

        <InputBox
          value={phone}
          setValue={setPhone}
          placeholder={'Enter Your Contact'}
          autoComplete={'tel'}
        />

        <InputBox
          value={answer}
          setValue={setAnswer}
          placeholder={'Enter Your Answer'}
          // autoComplete={'tel'}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>Register</Text>
          </TouchableOpacity>
          <Text>
            Already a user please?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('login')}>
              Login Here
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
export default Register;
