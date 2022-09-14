import { StyleSheet, Image, Dimensions } from 'react-native';
import Text from '../../components/Text'

const width = Dimensions.get('screen').width; //Essa funcionanlidade nos fornece a dimensão extada do dispositivo usado naquele momento

export default function Top({title, image}) {
    return(
        <>
            <Image style={styles.top} source={image} />
            <Text style={styles.titleCar}>{title}</Text>
        </>
    ); 
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (582/772) * width
  },
  titleCar: {
    color: '#fff',
    position: 'absolute',
    paddingVertical: 60,
    textAlign: 'center',
    width: '100%',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 40,
  }
});