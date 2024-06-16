import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import {userData} from '../../../data/UserData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const Account = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{uri: userData.profilePic}} style={styles.image} />
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.name}>
            Hi <Text style={{color: 'green'}}>{userData.name} 👋</Text>
          </Text>
          <Text style={styles.email}>email: {userData.email}</Text>
          <Text style={styles.email}>contact: {userData.contact}</Text>
        </View>

        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('profile', {id: userData._id})}>
            <AntDesign name="user" style={styles.btnText} />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <AntDesign name="bars" style={styles.btnText} />
            <Text style={styles.btnText}>My Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('notification')}>
            <AntDesign name="bells" style={styles.btnText} />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Materiallcons name="admin-panel-settings" style={styles.btnText} />
            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    // alignItems:'center'
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
  },
  email: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000000',
    fontSize: 15,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    color: '#000000',
  },
  btn: {
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 16,
    marginRight: 10,
    color: '#000000',
  },
});
export default Account;
