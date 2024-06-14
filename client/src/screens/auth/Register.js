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

const Register = ({navigation}) => {
  const loginImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&s';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = () => {
    if (!email || !password || !name) {
      return alert('Please add email or password or name');
    }
    alert('Register Successfully');
    navigation.navigate('login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: loginImage}} style={styles.image} />
        {/* <Text>Email</Text> */}
        <InputBox
          value={name}
          setValue={name}
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
