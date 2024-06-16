import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {userData} from '../../../data/UserData';
import InputBox from '../../components/Form/InputBox';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [email, setEmail] = useState(userData.email);
  const [profilePic, serProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  const navigation = useNavigation();
  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert('Please provide all field');
    }
    alert('Profile Update Successfully');
    navigation.navigate('account');
  };
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={{uri: profilePic}} style={styles.image} />
            <Pressable onPress={() => alert('profile dailogbox')}>
              <Text style={{color: 'red'}}>update your profile pic</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={'enter your name'}
            autoComplete={'name'}
          />

          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={'enter your email'}
            autoComplete={'email'}
          />

          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={'enter your password'}
            secureTextEntry={true}
            autoComplete={'password'}
          />

          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={'enter your address'}
            autoComplete={'address-line1'}
          />

          <InputBox
            value={city}
            setValue={setCity}
            placeholder={'enter your city'}
            autoComplete={'conutry'}
          />

          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={'enter your contact'}
            autoComplete={'tel'}
          />

          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  btnUpdate: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  btnUpdateText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Profile;
