import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {productData} from '../../data/ProductData';
import Layout from '../components/Layout/Layout';

const ProductDetail = ({route}) => {
  // console.log(route);
  const [productDetails, setProductDetails] = useState({});
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const getProduct = productData.find(p => {
      return p?._id === params?._id;
    });
    setProductDetails(getProduct);
  }, [params?._id]);

  const handleAddQty = () => {
    if (qty === 10) return alert("you can't add more than 10 quantity");
    setQty(prev => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty(prev => prev - 1);
  };
  const {params} = route;
  return (
    <Layout>
      {/* <Text>ProductDetails {params._id}</Text>
      <Text>ProductDetails {JSON.stringify(productDetails, null, 4)}</Text> */}
      <Image source={{uri: productDetails?.imageUrl}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{productDetails?.name}</Text>
        <Text style={styles.title}>Price: {productDetails?.price} $</Text>
        <Text style={styles.desc}>{productDetails?.description}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCart}
          onPress={()=>alert(`${qty} items added to cart`)}>
            <Text style={styles.btnCartText}>ADD TO CART</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#000000'}}>{qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'justify',
    marginVertical: 10,
    color: '#000000',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCartText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: 'lightgray',
    width: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    // fontWeight:'bold',
    color: '#000000',
  },
});
export default ProductDetail;
