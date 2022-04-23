import React from 'react-native';
import Text from '../../components/Text'
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width; //Essa funcionanlidade nos fornece a dimensão extada do dispositivo usado naquele momento

function Top({title, image}) {
    return(
        <View>
            <Image style={styles.top} source={image} />
            <Text style={styles.titleCart}>{title}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (582/772) * width,
  },
  titleCart: {
    color: '#fff',
    position: 'absolute',
    paddingVertical: 80,
    textAlign: 'center',
    width: '100%',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 40
  }
});

export default Top;