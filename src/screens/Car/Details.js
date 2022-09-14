import { StyleSheet, View, Image } from 'react-native';
import Text from '../../components/Text'

export default function Details({title, titileProduct, nameSalesman, description, image, price}) {
    return(
        <>
            <Text style={styles.details}>{title}</Text>
            <Text style={styles.title}>{titileProduct}</Text>
            <View style={styles.containerSalesman}>
                <Image style={styles.logoSales} source={image} />
                <Text style={styles.nameSalesman}>{nameSalesman}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </>
    ); 
}

const styles = StyleSheet.create({
 details: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  title: {
    color: '#ffa500',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  nameSalesman: {
    color: '#a3a3a3',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10
  },
  description: {
    color: '#a1a1a1',
    fontSize: 16,
    paddingVertical: 10
  },
  price: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 10
  },
  logoSales: {
    width: 32,
    height: 32,
    marginLeft: 30,
  },
  containerSalesman: {
    flexDirection: "row",
    padding: 10
  }
});