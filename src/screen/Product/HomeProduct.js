import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';
import axios from 'axios';

const HomeProduct = () => {

 const [products, setProducts] = useState([])

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
  } catch (error) {
    // Handle error
    showSnackbar('Error fetching products'); 
  }
}

const showSnackbar = (message) => {
  // Logic to display snackbar
  Snackbar.show({
    text: message
  });
}

useEffect(() => {
  fetchProducts();
}, []);



  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <Animated.View style={[styles.product, {transform: [{scale: isHovered ? 1.1 : 1}]}]}>
              <Image source={{uri: item.image}} style={styles.image}/>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              {item.isOnSale && <Text style={styles.salePrice}>Sale: {item.salePrice}</Text>}
              <Rating rating={item.rating}/>
              <Text style={styles.description}>{item.description}</Text>
            </Animated.View>  
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    product: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,    
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    price: {
      fontSize: 16,
      color: '#333'
    }
  });

export default HomeProduct;
