import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ProductCard = ({p}) => {
  const navigation = useNavigation();

  const handleMoreButton =(id)=>{
    navigation.navigate("ProductDetail", {_id:id})
    console.log(id);
  }

  const handleAddToCart = () =>{
    Alert.alert("Added to cart")
  }
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.cardImage} source={{uri: p?.imageUrl}} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDercs}>{p?.description.substring(0, 30)} ...more</Text>
        <View style={styles.btnContanier}>
          <TouchableOpacity style={styles.btn} onPress={()=>handleMoreButton(p._id)}>
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    width: '45%',
    padding: 10,
    // color:"#000000",
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  cardImage: {
    height: 120,
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDercs: {
    fontSize: 10,
    textAlign: 'left',
    color: '#000000',
  },
  btnContanier: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    backgroundColor: '#000000',
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCart: {
    backgroundColor: 'orange',
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color:"#ffffff",
    textAlign:'center',
    fontSize:10,
    fontWeight:"bold",

  },
});

export default ProductCard;
