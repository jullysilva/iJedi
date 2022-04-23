import React from 'react-native';
import Text from '../../components/Text'
import { StyleSheet, View, Image } from 'react-native';

export default function Top({title, titileProduct, nameSalesman, description, image, price}) {
    return(
        <View>
            <Text style={styles.details}>{title}</Text>
            <Text style={styles.title}>{titileProduct}</Text>
            <View style={styles.containerSalesman}>
                <Image style={styles.logoUser} source={image} />
                <Text style={styles.nameSalesman}>{nameSalesman}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
  details: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center',
    paddingVertical: 10
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'justify'
  },
  price: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 30
  },
  logoUser: {
    width: 32,
    height: 32,
    marginLeft: 30,
  },
  containerSalesman: {
    flexDirection: "row",
    padding: 10
  }
});