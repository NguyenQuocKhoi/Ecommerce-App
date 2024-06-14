import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {cartData} from '../../data/CartData';
import PriceTable from '../components/cart/PriceTable';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/cart/CartItem';
// import {useNavigation} from '@react-navigation/native';

const Cart = ({navigation}) => {
//   const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(cartData);

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You Have ${cartItems?.length} Item Left In Your Cart`
          : 'OOPS Your Cart is EMPTY !'}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map(item => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={'Price'} price={999} />
            <PriceTable title={'Tax'} price={1} />
            <PriceTable title={'Shipping'} price={1} />

            <View style={styles.grandTotal}>
              <PriceTable title={'Grand Total'} price={1001} />
            </View>

            <TouchableOpacity
              style={styles.btnCheckOut}
              onPress={() => navigation.navigate('checkout')}>
              <Text style={styles.btnCheckOutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    margin: 5,
    padding: 5,
    marginHorizontal: 20,
  },
  btnCheckOut: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#000000',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  btnCheckOutText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Cart;
