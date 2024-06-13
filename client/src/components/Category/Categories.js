import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {categoriesData} from '../../../data/CategoriesData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map(item => (
          <View key={item._id}>
            <TouchableOpacity style={styles.cateContainer} onPress={()=>navigation.navigate(item.path)}>
              <FontAwesome name={item.icon} style={styles.cateIcon} />
              <Text style={styles.cateTitile}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    flexDirection: 'row',
  },
  cateContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateIcon: {
    fontSize: 30,
    verticalAlign: 'top',
    color: '#000000',
  },

  cateTitile: {
    fontSize: 12,
    color:"#000000"
  },
});
export default Category;
