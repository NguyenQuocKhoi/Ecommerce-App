import {Text, View, StyleSheet, TextInput} from 'react-native';
import Layout from '../components/Layout/Layout';
import Category from '../components/Category/Categories';
import Banner from '../components/Banner/Banner';
import Product from '../components/Product/Product';
import Header from '../components/Layout/Header';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUserData} from '../../redux/features/auth/userAction';

export default function Home() {
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserData());
    console.log(isAuth);
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Category />
      <Banner />
      <Product />
      {/* <View >
        <Text>Test</Text>
      </View> */}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
