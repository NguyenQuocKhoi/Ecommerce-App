import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.text}>Order ID : {order._id}</Text>
        <Text style={styles.text}>Date : {order.date}</Text>
      </View>

      <Text style={styles.text}>Product Name : {order.productInfo.name}</Text>
      <Text style={styles.text}>Price : {order.productInfo.price}</Text>
      <Text style={styles.text}>Quantity : {order.productInfo.qty}</Text>
      <Text style={styles.text}>Total Amount : {order.totalAmount} $</Text>
      {/* <View > */}
      <Text style={styles.status}>Order Status : {order.status}</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: 'bold',
    borderColor: 'lightgray',
    padding: 5,
    color: '#000000',
  },
  text: {
    color: '#000000',
  },
});
export default OrderItem;
